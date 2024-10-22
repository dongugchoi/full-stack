import React from 'react';
import { useState,useEffect } from 'react';
import '../css/styles.css'
import { call } from '../service/ApiService';
import AddProduct from './AddProduct';
import OrderInfo from '../order/order_info.js';


export default function P_info(){
    const [items,setItems] = useState([]);
    const [open, setOpen] = useState(true);
    const[selectedIndex, setSelectedIndex] = useState(null);
    const [orderCount, setOrderCount] = useState(''); 
    const [showOrderInfo, setShowOrderInfo] = useState(false);
    
    useEffect(()=>{
        call("/products","GET")
        .then(result => {
            setItems(result.data);
        })
    },[])

    const addItem = (newProduct) => {
        
        call("/products","POST",newProduct)
        .then(result => {
            setItems(result.data);
        })
    };

    
    const onButtonClick = ()=>{
        setOpen(false);
    }
    
    const handleRadioChange = (index) => {
        setSelectedIndex(index);
        setOrderCount(''); 
    };    
    
    const handleOrderCountChange = (event) => {
        setOrderCount(event.target.value);
    };
    
    let productItems = items.length > 0 && (
        <div>
            <table border="1">
               
                <tr>
                    <th>상품 번호</th>
                    <th>상품 이름</th>
                    <th>상품 재고</th>
                    <th>상품 가격</th>
                    <th>등록 날짜</th>
                    <th>수정 날짜</th>
                </tr>
                <tbody>
                {items.map((item,index) => (
                    <tr key={item.productId}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.inventory}</td>
                        <td>{item.price}</td>
                        <td>{item.adddate}</td>
                        <td>{item.editdate}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
    
    let addProductbtn = <button type="button" className='btn' onClick={onButtonClick}>상품추가</button>
    
    let addProductScreen = <AddProduct addItem={addItem} setOpen={setOpen} />;
    let addButton = addProductbtn;

    
    if(!open){
    addButton = addProductScreen;
    }
    return(
        <div className='container'>
            {addButton}
            {productItems}
            {showOrderInfo && <OrderInfo/>}
        </div>
    );
}