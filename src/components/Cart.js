// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateCartQuantity } from '../redux/actions/cartActions';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateCartQuantity(id, quantity));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="cart__empty">
          <p>Your cart is empty.</p>
          <Link to="/">Go to Home</Link>
        </div>
      ) : (
        <div className="cart__items">
          {cartItems.map(item => (
            <div key={item.id} className="cart__item">
              <img src={item.image} alt={item.name} />
              <div className="cart__itemDetails">
                <p>{item.name}</p>
                <p>${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                />
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart__total">
            <h2>Total: ${getTotalPrice()}</h2>
            <Link to="/checkout">
              <button className="cart__checkoutButton">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
