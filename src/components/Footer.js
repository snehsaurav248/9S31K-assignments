// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__column">
          <h3>Get to Know Us</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/press">Press Releases</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>Make Money with Us</h3>
          <ul>
            <li><a href="/sell">Sell on Our Platform</a></li>
            <li><a href="/affiliate">Become an Affiliate</a></li>
            <li><a href="/advertise">Advertise Your Products</a></li>
            <li><a href="/business">Business Accounts</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>Payment Products</h3>
          <ul>
            <li><a href="/credit-card">Credit Card Offers</a></li>
            <li><a href="/gift-cards">Gift Cards</a></li>
            <li><a href="/rewards">Rewards Program</a></li>
            <li><a href="/reload-balance">Reload Balance</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>Let Us Help You</h3>
          <ul>
            <li><a href="/customer-service">Customer Service</a></li>
            <li><a href="/returns">Returns & Replacements</a></li>
            <li><a href="/shipping">Shipping Rates & Policies</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
