// src/components/SomeComponent.js

import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const SomeComponent = ({ item, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <p>${item.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default connect(null, { addToCart })(SomeComponent);
