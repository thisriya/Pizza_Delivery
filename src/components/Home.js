import './styles.css'; 
import pizza_img from './pizza.jpeg';
import { Link } from "react-router-dom";
import  { useState } from "react";

function Home({addToCart}) {
  // Example pizza data
  const [message,setMessage]=useState("");
  const pizzas = [
    { name: 'Margherita', size: 'Small', price: 250 },
    { name: 'Farmhouse', size: 'Medium', price: 300 },
    { name: 'Veggie Paradise', size: 'Large', price: 350 },
    { name: 'Peppy Paneer', size: 'Medium', price: 400 },
  ];

  const handleAddToCart = (pizza) =>{
    addToCart(pizza);
    setMessage(`${pizza.name} added to the cart`);
    setTimeout(()=>{
      setMessage("");
    },2000);
  };

    return (
      <div className="home-container">
        <div className="heading">
          <h1 className="heading1">WELCOME TO PIZZATORIA!</h1>
          <Link to="/menu">
            {/* */}
             <Link to="/" className="forgot-link">
             <button className="order">Order Now!</button>      
             </Link>
          </Link>
          <img src={pizza_img} className="pizza-image-main" alt="Pizza" />
        </div>
  
        <div className="subheading">
          <h1 className="quote">
            Some People Eat to Live Some<span> Live to Eat!!</span>
          </h1>
        </div>

        <div className="pizzas-list">
          {pizzas.map((pizza, index) => (
            <div key={index} className="pizza-item">
              <div className="box">
                <img
                  src={pizza_img}
                  alt={pizza.name}
                  className="pizza-image"
                />
                <h3 className="pizza-name">{pizza.name}</h3>
                <p className="pizza-size">{pizza.size}</p>
                <p className="pizza-price">₹{pizza.price}</p>
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(pizza)}
                >
                  + Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {message && <div className="message">{message}</div>}
      </div>
    );
}

export default Home;
