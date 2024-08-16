import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/ProductCard.css"; 
import { fetchProducts } from "../utils/api"; 



const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("all");
 

  useEffect(() => {
    // Fetch data from the fake store API
    fetchProducts()
    .then((data) => {
      setProducts(data);
      setLoading(false);
    })
    .catch((err) => {
      setError("Failed to fetch products.");
      setLoading(false);
    });
}, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[product.id]) {
        updatedCart[product.id].quantity += 1;
      } else {
        updatedCart[product.id] = { ...product, quantity: 1 };
      }
      return updatedCart;
    });
  };

  const handleIncrement = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: {
        ...prevCart[productId],
        quantity: prevCart[productId].quantity + 1,
      },
    }));
  };

  const handleDecrement = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId].quantity > 1) {
        updatedCart[productId].quantity -= 1;
      } else {
        delete updatedCart[productId];
      }
      return updatedCart;
    });
  };

  // Calculate total cart count
  const totalCartCount = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  

  // Filtering products by category
  const clothingProducts = products.filter(
    (product) =>
      product.category === "men's clothing" || product.category === "women's clothing"
  );
  const accessoriesProducts = products.filter(
    (product) =>
      product.category === "jewelery" || product.category === "women's accessories" || product.category === "men's accessories"
  );
  const electronicsProducts = products.filter(
    (product) => product.category === "electronics"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <header className="shoplane-header">
        <div className="container">
          <span id="logo">
            <span className="shop">SHOP</span>
            <span className="lane">LANE</span>
          </span>
          <nav className="nav-links">
            <a href="/" onClick={() => setCategory("all")}>HOME</a>
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
            <a href="#" className="user-icon">
              <i className="fas fa-user"></i>
            </a>
          </div>
        </div>
      </header>

      {/* Clothing Section */}
      <div className="product-view-page">
        <h2>Clothing for Men and Women</h2>
        <div className="product-grid">
          {clothingProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">{product.price} $</p>
              {cart[product.id] ? (
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(product.id)}>-</button>
                  <span>{cart[product.id].quantity}</span>
                  <button onClick={() => handleIncrement(product.id)}>+</button>
                </div>
              ) : (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="add-to-cart-button"
                >
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Accessories Section */}
      <div className="product-view-page">
        <h2>Accessories for Men and Women</h2>
        <div className="product-grid">
          {accessoriesProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">{product.price} $</p>
              {cart[product.id] ? (
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(product.id)}>-</button>
                  <span>{cart[product.id].quantity}</span>
                  <button onClick={() => handleIncrement(product.id)}>+</button>
                </div>
              ) : (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="add-to-cart-button"
                >
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Electronics Section */}
      <div className="product-view-page">
        <h2>Electronics Items</h2>
        <div className="product-grid">
          {electronicsProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">{product.price} $</p>
              {cart[product.id] ? (
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(product.id)}>-</button>
                  <span>{cart[product.id].quantity}</span>
                  <button onClick={() => handleIncrement(product.id)}>+</button>
                </div>
              ) : (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="add-to-cart-button"
                >
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
