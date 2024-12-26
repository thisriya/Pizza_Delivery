import './register.css';

import React, { useState } from "react";

const Register = () => {
    const [messages, setMessages] = useState({ error: "", name: "", email: "" });

 

    return (
            <section className="register">
                <form>
                    {messages.error && <p className="error">{messages.error}</p>}
                    <div id="login">
                        <h2 id="h2_line">Please Register Yourself!</h2>
                        <label id="username">
                            Username:
                            <input
                                type="text"
                                name="name"
                                value={messages.name}
                                onChange={(e) =>
                                    setMessages({ ...messages, name: e.target.value })
                                }
                                placeholder="Enter Username:"
                                required
                            />
                        </label>
                        <br />
                        <label id="email">
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={messages.email}
                                onChange={(e) =>
                                    setMessages({ ...messages, email: e.target.value })
                                }
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
                            Register
                        </button>
                        <a href="/login" className="forgot-link">
                            Already Have Account?
                        </a>
                    </div>
                </form>
                <p className="login-footer">&copy; 2024 Pizzatoria. All rights reserved.</p>
            </section>
    );
};

export default Register;
