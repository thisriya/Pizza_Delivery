import React from "react";
import "./Cart.css"; // Assuming you have a CSS file for styling
import cartimg from "./cart-img.webp";
import cartorder from "./order-cart.webp"
import pizzaimage from "./pizza.jpeg";

const Cart = ({ cart }) => {
  // Check if the cart has items
  const hasItems = cart && cart.length > 0;

  return (
    <section className="cart">
        <h2 className="order-summary">Order Summary</h2>
      {hasItems ? (
        <div className="main">
          <div className="order-container">
          
            <div className="pizza-list">
              {cart.map((pizza, index) => (
                <div key={index} className="pizza-list-order">
                  <img
                    src={pizzaimage}
                    alt={pizza.name}
                    className="cart-pizza-img"
                  />
                  <p className="cart-order-type">{pizza.name}</p>
                  <p className="cart-order-size">{pizza.size}</p>
                  <p className="quantity">{pizza.quantity} pcs</p>
                  <p className="price">₹{pizza.price * pizza.quantity}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reciept">
            <p>
              Total Amount: ₹{" "}
              {cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0)}
            </p>
            <button className="checkout">Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h1 className="cart-heading">Sorry! Your Cart is Empty☹</h1>
          <p className="cart-msg">
            It seems that probably you have not added any item to your cart. Please go to the Home page to order pizza.
          </p>
          <img src={cartimg} className="cart-image" alt="Empty Cart" />
          <a href="/">
            <button className="cart-btn">Go Back</button>
          </a>
        </div>
      )}
    </section>
  );
};

export default Cart;
