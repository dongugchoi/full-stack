import React, { useState, useEffect } from 'react';
import './css/styles.css';
import { call } from './service/ApiService';
import AddProduct from './AddProduct';
import OrderInfo from './OrderInfo';

export default function P_info() {
    const [items, setItems] = useState([]); // 초기값을 빈 배열로 설정
    const [open, setOpen] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [orderCount, setOrderCount] = useState('');
    const [showOrderInfo, setShowOrderInfo] = useState(false); 

    const handleRadioChange = (index) => {
        setSelectedIndex(index);
        setOrderCount('');
    };

    useEffect(() => {
        call("/products", "GET")
            .then(result => {
                console.log("API 응답:", result); // API 응답을 콘솔에 출력
                if (result && result.data) {
                    setItems(result.data);
                } else {
                    console.error("Invalid API response:", result);
                }
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);

    const orderProduct = () => {
        if (selectedIndex !== null && orderCount > 0 && items[selectedIndex - 1]) {
            const orderData = {
                productId: items[selectedIndex - 1].id,
                productCount: parseInt(orderCount)
            };
            call("/orders", "POST", orderData)
                .then(result => {
                    // 주문 후 상품 목록을 다시 가져오기
                    return call("/products", "GET");
                })
                .then(result => {
                    if (result && result.data) {
                        setItems(result.data); // 최신 상품 목록으로 업데이트
                    }
                })
                .catch(error => console.error("Error placing order:", error));
        } else {
            alert("상품을 선택하고 주문 개수를 입력하세요.");
        }
    };

    const addItem = (newProduct) => {
        call("/products", "POST", newProduct)
            .then(result => {
                console.log("상품 추가 결과:", result);
                if (result && result.data) {
                    setItems(result.data);
                }
            })
            .catch(error => console.error("Error adding product:", error));
    };

    const showOrderDetails = () => {
        setShowOrderInfo(!showOrderInfo);
    };

    const onButtonClick = () => {
        setOpen(false);
    };

    const handleOrderCountChange = (event) => {
        setOrderCount(event.target.value);
    };

    let productItems = items.length > 0 ? (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>단일 선택</th>
                        <th>주문 개수</th>
                        <th>상품 번호</th>
                        <th>상품 이름</th>
                        <th>상품 재고</th>
                        <th>상품 가격</th>
                        <th>등록 날짜</th>
                        <th>수정 날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={item.productId}>
                            <td>
                                <input 
                                    type="radio" 
                                    name="productId" 
                                    onChange={() => handleRadioChange(index + 1)} 
                                    checked={selectedIndex === index + 1} 
                                />
                            </td>
                            <td>
                                <input 
                                    type="number"
                                    value={selectedIndex === index + 1 ? orderCount : ''}
                                    onChange={handleOrderCountChange}
                                    readOnly={selectedIndex !== index + 1} 
                                />
                            </td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.stock}</td>
                            <td>{item.price}</td>
                            <td>{item.adddate}</td>
                            <td>{item.editdate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="button" onClick={orderProduct}>주문 완료</button>
            <button type="button" onClick={showOrderDetails}>주문내역</button>
        </div>
    ) : (
        <div>상품이 없습니다.</div>
    );

    let addProductButton = <button type="button" onClick={onButtonClick}>상품추가</button>;
    let addProductScreen = <AddProduct addItem={addItem} setOpen={setOpen} />;

    return (
        <div className='container'>
            {open ? addProductButton : addProductScreen}
            {productItems}
            {showOrderInfo && <OrderInfo />}
        </div>
    );
}