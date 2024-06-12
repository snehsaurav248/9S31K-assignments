// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const categories = [
    { name: 'Electronics', image: '/path-to-electronics-image.jpg' },
    { name: 'Fashion', image: '/path-to-fashion-image.jpg' },
    // Add more categories as needed
  ];

  const featuredProducts = [
    { id: 1, name: 'Product 1', price: 29.99, image: '/path-to-product1-image.jpg' },
    { id: 2, name: 'Product 2', price: 59.99, image: '/path-to-product2-image.jpg' },
    // Add more products as needed
  ];

  const dealsOfTheDay = [
    { id: 3, name: 'Deal 1', price: 19.99, image: '/path-to-deal1-image.jpg' },
    { id: 4, name: 'Deal 2', price: 39.99, image: '/path-to-deal2-image.jpg' },
    // Add more deals as needed
  ];

  return (
    <div className="homepage">
      <div className="homepage__banner">
        <img src="/path-to-banner-image.jpg" alt="Banner" />
      </div>

      <div className="homepage__categories">
        <h2>Shop by Category</h2>
        <div className="homepage__categoryList">
          {categories.map((category, index) => (
            <div key={index} className="homepage__category">
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="homepage__featured">
        <h2>Featured Products</h2>
        <div className="homepage__productList">
          {featuredProducts.map(product => (
            <div key={product.id} className="homepage__product">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>${product.price}</p>
              <Link to={`/product/${product.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>

      <div className="homepage__deals">
        <h2>Deals of the Day</h2>
        <div className="homepage__dealList">
          {dealsOfTheDay.map(deal => (
            <div key={deal.id} className="homepage__deal">
              <img src={deal.image} alt={deal.name} />
              <p>{deal.name}</p>
              <p>${deal.price}</p>
              <Link to={`/product/${deal.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
