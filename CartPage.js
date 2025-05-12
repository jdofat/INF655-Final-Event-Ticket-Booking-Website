/*
1. Display selected events with quantity selectors
2. Allow users to update or remove tickets
3. Show total price dynamically
*/

import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const updateCart = (index, quantity) => {
    const updated = [...cart];
    updated[index].quantity = quantity;
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) return <p style={{ padding: "20px" }}>Your cart is empty.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart</h2>
      {cart.map((item, i) => (
        <div key={i} style={{ marginBottom: "10px" }}>
          <p>{item.title}</p>
          <p>${item.price} x 
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => updateQuantity(i, parseInt(e.target.value))}
            />
          </p>
          <button onClick={() => removeItem(i)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default CartPage;
