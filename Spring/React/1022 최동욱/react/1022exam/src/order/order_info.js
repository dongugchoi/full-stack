import React, { useState, useEffect } from 'react';
import { call } from '../service/ApiService';

export default function OrderInfo() {
    const [orderList, setOrderList] = useState([]);
    const [loading, setLoading] = useState(true); // 로딩 상태 추가
    const [error, setError] = useState(null); // 오류 상태 추가

    useEffect(() => {
        call("/orders/total", "GET")
            .then(result => {
                setOrderList(result.data);
                setLoading(false); // 로딩 완료
            })
            .catch(err => {
                setError(err);
                setLoading(false); // 로딩 완료
            });
    }, []);

    if (loading) return <div>Loading...</div>; // 로딩 중일 때

    if (error) return <div>Error: {error.message}</div>; // 오류 발생 시

    return (
        <div id="container">
            <table border="1">
                <thead>
                    <tr>
                        <th>상품 이름</th>
                        <th>상품 가격</th>
                        <th>주문 개수</th>
                        <th>결제 금액</th>
                        <th>주문 날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {orderList.map((order) => (
                        <tr key={order.orderId}>
                            <td>{order.productName}</td>
                            <td>{order.productPrice}</td>
                            <td>{order.productCount}</td>
                            <td>{order.totalPrice}</td>
                            <td>{order.orderDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
