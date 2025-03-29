import './styles.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
   

    return (
            <section className="login">
                <form >
                    <div id="login">
                        <h2 id="h2_line">Please Login!</h2>
                        <label id="username">
                            Email:
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email:"
                                required
                            />
                        </label>
                        <br />
                        <label id="password">
                            Password:
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Your Password:"
                                required
                            />
                        </label>
                        <br />
                        <button type="submit" className="b" id="sign-in-btn">
                            Sign-In
                        </button>
                        <Link to="/register" className="forgot-link">
                            Don't Have Account?
                        </Link>
                    </div>
                </form>
                <p className="login-footer">&copy; 2025 Pizzatoria. All rights reserved.</p>
            </section>

          
        
    );
};

export default Login;

