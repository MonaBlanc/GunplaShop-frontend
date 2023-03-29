import React from 'react';

function ProductList({ handlePageChange }) {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3' }
  ];

  const handleClick = (productId) => {
    handlePageChange('ProductDetails', { productId });
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => handleClick(product.id)}>
            <p>{product.name}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
