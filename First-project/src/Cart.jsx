import React from "react";
import "./Cart.css";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Wireless Headphones", price: 49 },
    { id: 2, name: "Smart Watch", price: 79 },
  ];

  const total = cartItems.reduce((sum, i) => sum + i.price, 0);

  return (
    <section className="cart" id="cart">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <span>{item.name}</span>
          <span>${item.price}</span>
        </div>
      ))}
      <hr />
      <h3>Total: ${total}</h3>
    </section>
  );
};

export default Cart;
