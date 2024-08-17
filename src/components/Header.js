import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Header.css"; // Assuming you have a separate CSS file for header styling
import { useNavigate } from "react-router-dom";


const Header = ({ totalCartCount, setCategory }) => {
  const  navigate = useNavigate();
  return (
    <header className="shoplane-header">
      <div className="container">
        <span id="logo">
          <span className="shop">SHOP</span>
          <span className="lane">LANE</span>
        </span>
        <nav className="nav-links">
          <a href="#" onClick={() => setCategory("all")}>HOME</a>
          <a href="#" onClick={() => setCategory("clothing")}>CLOTHING</a>
          <a href="#" onClick={() => setCategory("accessories")}>ACCESSORIES</a>
          <a href="#" onClick={() => setCategory("electronics")}>ELECTRONICS</a>
        </nav>
        <div className="header-icons">
          <a href="#" className="search-icon">
            <i className="fas fa-search"></i>
          </a>
          <a href="/Cart" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">{totalCartCount}</span>
          </a>
          <a href="/login" className="user-icon">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
