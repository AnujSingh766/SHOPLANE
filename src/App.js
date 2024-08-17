import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './App.css';

function App() {
  // Step 1: Initialize cart state
  const [cart, setCart] = useState({});

  // Step 2: Handle Increment Function
  const handleIncrement = (itemId) => {
    const updatedCart = { ...cart };
    updatedCart[itemId].quantity += 1;
    setCart(updatedCart);
  };

  // Step 3: Handle Decrement Function
  const handleDecrement = (itemId) => {
    const updatedCart = { ...cart };
    if (updatedCart[itemId].quantity > 1) {
      updatedCart[itemId].quantity -= 1;
    } else {
      delete updatedCart[itemId]; // remove the item if quantity reaches zero
    }
    setCart(updatedCart);
  };

  // Step 4: Add to Cart Function (can be triggered from ProductCard)
  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[item.id]) {
        updatedCart[item.id].quantity += 1; // increase quantity if item exists
      } else {
        updatedCart[item.id] = { ...item, quantity: 1 }; // add new item with quantity 1
      }
      console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,', updatedCart)
      return updatedCart;
    });
  };

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Cart" element={
          <Cart 
            cart={cart} 
            handleIncrement={handleIncrement} 
            handleDecrement={handleDecrement} 
          />} 
        />
        <Route path="/ProductCard" element={
          <ProductCard addToCart={addToCart} />} 
        />
      </Routes>
    </div>
  );
}

export default App;
