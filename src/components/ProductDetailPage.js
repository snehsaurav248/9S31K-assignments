// src/components/ProductDetailPage.js

import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions'; // Import addToCart

const ProductDetailPage = ({ addToCart }) => {
  const item = {
    // item details
  };

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div>
      {/* Product details */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default connect(null, { addToCart })(ProductDetailPage);
