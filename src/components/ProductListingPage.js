// src/components/ProductListingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './ProductListingPage.css';
const ProductListingPage = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: '/path-to-product1-image.jpg' },
    { id: 2, name: 'Product 2', price: 59.99, image: '/path-to-product2-image.jpg' },
    // Add more products as needed
  ];

  return (
    <div className="product-listing-page">
      <h1>Product Listing</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
