import React from "react";
import "../styles/Cart.css";
import { useCart } from "./CartContext"; // Import the useCart hook

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity } = useCart(); // Access cart context

  // Ensure cart is an object even if not passed or undefined
  const safeCart = cart || {};

  const totalPrice = Object.values(safeCart).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <header className="cart-header">
        <h2>Your Shopping Cart</h2>
      </header>

      <div className="cart-items">
        {Object.keys(safeCart).length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-grid">
            {Object.values(safeCart).map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <p className="cart-item-price">{item.price} $</p>
                  <div className="quantity-controls">
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="cart-footer">
        <div className="total-price">
          <h3>Total Price: {totalPrice.toFixed(2)} $</h3>
        </div>
        <button className="checkout-button">Proceed to Checkout</button>
      </footer>
    </div>
  );
};

export default Cart;
