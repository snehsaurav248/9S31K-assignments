// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductListingPage from './components/ProductListingPage';
import ProductDetailPage from './components/ProductDetailPage';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" exact component={HomePage} />
            <Route path="/products" component={ProductListingPage} />
            <Route path="/product/:id" component={ProductDetailPage} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
