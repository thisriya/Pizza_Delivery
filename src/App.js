// import './App.css';
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Cart from "./components/cart";
import Register from "./components/register";
import Login from "./components/login";
import  { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// const isProduction = process.env.NODE_ENV === "production";
// const basename = isProduction ? "/Pizza_Delivery" : "/";

const App = () => {
  const [cart,setCart] = useState([]);
  
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      // Add new item to cart
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart}/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
};

export default App;
