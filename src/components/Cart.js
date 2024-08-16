import React from "react";
import "../styles/Cart.css"; // Import CSS if needed

const Cart = ({ cart = {}, handleIncrement, handleDecrement }) => {
  const totalPrice = Object.values(cart).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <header className="cart-header">
        <h2>Your Shopping Cart</h2>
      </header>

      <div className="cart-items">
        {Object.keys(cart).length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-grid">
            {Object.values(cart).map((item) => (
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
                    <button onClick={() => handleDecrement(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.id)}>+</button>
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
