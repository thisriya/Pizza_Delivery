import React from "react";
import logo from "./logo_image.avif";
import cart from "./order-cart.webp";
import "./styles.css";
import { Link } from "react-router-dom";
import "./login";
import "./register";


function Header() {
  
    return (
      <header>
        <img src={logo} alt="Logo" className="logo_class" />
        <div className="nav">
        <ul className="nav-list">
            <li><Link to="/" className="item">Home</Link></li>
            <li><Link to="#" className="item">Offers</Link></li>
            <li><Link to="/register" className="item">Register</Link></li>
            <li><Link to="/login" className="item">Login</Link></li>
            <Link to="/cart">
            <img src={cart} alt="Cart" className="cart-img" />
          </Link>
        </ul>
    </div>
      </header>
    );
  }

  export default Header;