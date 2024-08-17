import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import CartProvider from the Context API
import { CartProvider } from './components/CartContext';  // Adjust the path based on your file structure

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    {/* Wrap App in CartProvider to make the cart state accessible throughout */}
    <CartProvider>
      <App />
    </CartProvider>
  </Router>
);

reportWebVitals();
