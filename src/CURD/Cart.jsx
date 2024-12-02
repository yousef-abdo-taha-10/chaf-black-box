import React from "react";

const Cart = ({ cartItems }) => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 20;
  const tax = 0; // Tax is zero in this example
  const total = subtotal + shipping + tax;

  return (
    <div className="cart">
      <h2>Cart Summary</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <p>
            {item.name} x {item.quantity}
          </p>
          <p>Total: {item.price * item.quantity} EGP</p>
        </div>
      ))}
      <div className="cart-summary">
        <p>Subtotal: {subtotal} EGP</p>
        <p>Tax: {tax} EGP</p>
        <p>Shipping: {shipping} EGP</p>
        <p>
          <strong>Total: {total} EGP</strong>
        </p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
