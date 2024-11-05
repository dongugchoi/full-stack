import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Products() {
  const { categoryId } = useParams();

  // 실제로는 서버에서 카테고리 ID에 따른 상품 목록을 가져와야 한다.
  // 여기서는 예시를 위해 하드코딩한다.
  const products = [
    { id: 1, name: '노트북', categoryId: '1' },
    { id: 2, name: '스마트폰', categoryId: '1' },
    { id: 3, name: '셔츠', categoryId: '2' },
    { id: 4, name: '청바지', categoryId: '2' },
    { id: 5, name: '사과', categoryId: '3' },
    { id: 6, name: '우유', categoryId: '3' },
  ];

  const filteredProducts = products.filter(product => product.categoryId === categoryId);

  return (
    <div>
      <h1>카테고리 {categoryId}의 상품 목록</h1>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <Link to={`/categories/${categoryId}/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;