// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import MyntraIcon from '../assets/myntra-icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={MyntraIcon} alt="Myntra" />
            </div>
            <ul className="navbar-links">
                <li><a href="/men">Men</a></li>
                <li><a href="/women">Women</a></li>
                <li><a href="/kids">Kids</a></li>
                <li><a href="/home-living">Home & Living</a></li>
                <li><a href="/beauty">Beauty</a></li>
            </ul>
            <div className="navbar-icons">
                <a href="#" className="icon-link"><FontAwesomeIcon icon={faSearch} /></a>
                <a href="#" className="icon-link"><FontAwesomeIcon icon={faHeart} /></a>
                <a href="#" className="icon-link"><FontAwesomeIcon icon={faShoppingBag} /></a>
            </div>
        </nav>
    );
}

export default Navbar;
