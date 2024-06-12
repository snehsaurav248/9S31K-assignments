// src/components/Checkout.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import './Checkout.css';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const handleChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Handle order placement logic here
    alert('Order placed successfully!');
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout__details">
        <h2>Shipping Details</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={shippingDetails.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingDetails.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingDetails.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={shippingDetails.state}
            onChange={handleChange}
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={shippingDetails.zip}
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={shippingDetails.country}
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="checkout__summary">
        <h2>Order Summary</h2>
        {cartItems.map(item => (
          <div key={item.id} className="checkout__item">
            <p>{item.name} x {item.quantity}</p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <div className="checkout__total">
          <h2>Total: ${getTotalPrice()}</h2>
          <button onClick={handlePlaceOrder} className="checkout__placeOrderButton">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
