import React from 'react';
import { useState, useEffect } from 'react';
import './p.css';
import { call } from './Service/ApiService';
import AddProduct from './AddProduct';

function Product_info() {
    const [items, setItems] = useState([]);
    const [open, setOpen] = useState(true);

    useEffect(() => {
        call("/product", "get")
            .then(result => {
                if (Array.isArray(result.data)) {
                    setItems(result.data);
                }
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });0
    }, []);

    const onButtonClick = () => {
        setOpen(false);
    };

    const addItem = (newProducts) => {
        call("/product", "post",newProducts)
        .then(result => {
            if (Array.isArray(result.data)) {
                setItems(result.data);
            }
        })
        .catch(error => {
            console.error("Error fetching products:", error);
        });
    }

    let productItems = items.length > 0 ? (
        <table border="1">
            <thead>
                <tr>
                    <th>상품 번호</th>
                    <th>상품 이름</th>
                    <th>상품 재고</th>
                    <th>상품 가격</th>
                    <th>등록 날짜</th>
                    <th>수정 날짜</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.stock}</td>
                        <td>{item.price}</td>
                        <td>{item.createAt}</td>
                        <td>{item.updateAt}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
        <p>상품이 없습니다.</p>
    );

    let addProduct = <button type="button" onClick={onButtonClick}>상품추가</button>;
    let addProductScreen = <AddProduct addItem={addItem} setOpen={setOpen} />;
    let addButton = addProduct;

    if (!open) {
        addButton = addProductScreen;
    }

    return (
        <div className='container'>
            {addButton}
            {productItems}
        </div>
    );
}

export default Product_info;
