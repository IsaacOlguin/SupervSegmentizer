import React from "react";
import "./Login.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Login(){
    return (
        <div className="login-wrapper">
            <Header />

            <body>
                <h3>Please login</h3>
                <form>
                    <label>
                        <p>Username</p>
                        <input type="text" />
                    </label>

                    <label>
                        <p>Password</p>
                        <input type="password"/>
                    </label>

                    <p></p>

                    <div>
                        <center><button type="submit">Login</button></center>
                    </div>
                </form>
            </body>

            <Footer />
        </div>
    );
}