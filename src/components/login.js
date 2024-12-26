import './login.css';
import React, { useState } from "react";

const login = () => {
   

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
                        <a href="/register" className="forgot-link">
                            Don't Have Account?
                        </a>
                    </div>
                </form>
                <p className="login-footer">&copy; 2024 Pizzatoria. All rights reserved.</p>
            </section>

          
        
    );
};

export default login;

