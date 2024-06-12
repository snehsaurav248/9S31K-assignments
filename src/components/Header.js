// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';  // Assuming you have a CSS file for styling

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const user = useSelector(state => state.user);

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src="/path-to-your-logo.png" alt="Amazon" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <button className="header__searchButton">
          <img src="/path-to-search-icon.png" alt="Search" />
        </button>
      </div>

      <nav className="header__nav">
        <Link to={!user && "/login"} className="header__navItem">
          <div className="header__option">
            <span className="header__optionLineOne">
              Hello, {user ? user.name : 'Sign In'}
            </span>
            <span className="header__optionLineTwo">
              {user ? 'Account & Lists' : 'Sign In'}
            </span>
          </div>
        </Link>

        <Link to="/orders" className="header__navItem">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/cart" className="header__navItem header__cart">
          <div className="header__optionBasket">
            <img src="/path-to-cart-icon.png" alt="Cart" />
            <span className="header__optionLineTwo header__cartCount">
              {cartItems.length}
            </span>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
