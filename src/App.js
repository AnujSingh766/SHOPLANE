import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import './App.css';
import ResetPassword from './components/ResetPassword';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/ProductCard" element={<ProductCard />} />
        <Route path="/Cart" element = {<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
