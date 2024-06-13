// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4 className="footer-title">Online Shopping</h4>
                <ul className="footer-links">
                    <li><a href="/men">Men</a></li>
                    <li><a href="/women">Women</a></li>
                    <li><a href="/kids">Kids</a></li>
                    <li><a href="/home-living">Home & Living</a></li>
                    <li><a href="/beauty">Beauty</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4 className="footer-title">Customer Policies</h4>
                <ul className="footer-links">
                    <li><a href="/shipping">Shipping</a></li>
                    <li><a href="/returns">Returns</a></li>
                    <li><a href="/payments">Payments</a></li>
                    <li><a href="/gift-cards">Gift Cards</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4 className="footer-title">Experience Myntra App on Mobile</h4>
                <ul className="footer-links">
                    <li><a href="/ios-app">iOS</a></li>
                    <li><a href="/android-app">Android</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4 className="footer-title">Useful Links</h4>
                <ul className="footer-links">
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4 className="footer-title">Popular Searches</h4>
                <ul className="footer-links">
                    <li><a href="/trends">Trending</a></li>
                    <li><a href="/sales">Sales</a></li>
                    <li><a href="/offers">Offers</a></li>
                    <li><a href="/new-arrivals">New Arrivals</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
