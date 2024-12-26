import React from "react";
import logo from "./logo_image.avif";
import cart from "./order-cart.webp";
import "./Header.css";
import { Link } from "react-router-dom";
import "./login";
import "./register";


function Header() {
  
    return (
      <header>
        <img src={logo} alt="Logo" className="logo_class" />
        <div className="nav">
        <ul className="nav-list">
            <li><a href="/" className="item">Home</a></li>
            <li><a href="#" className="item">Offers</a></li>
            <li><a href="/register" className="item">Register</a></li>
            <li><a href="/login" className="item">Login</a></li>
            {/* <img src={cart} alt="Logo" className="cart-img" /> */}
            <Link to="/cart">
            <img src={cart} alt="Cart" className="cart-img" />
          </Link>
        </ul>
    </div>
      </header>
    );
  }

  export default Header;