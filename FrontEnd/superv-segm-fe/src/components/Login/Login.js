// General components 
import React, { useState } from "react";
import PropTypes from 'prop-types';
// CSS
import "./Login.css";
// Own Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// Globals
import Globals from "../../Globals";
import FunctUtilities from "../../utilities/functUtilities";

async function loginUser(credentials) {
    return fetch(
        Globals.URL_BE_SERVER + Globals.URL_LOGIN, {
            method: Globals.HTTP_METHOD_POST,
            headers: {
                "Content-Type": Globals.HTTP_CONTENT_TYPE_APP_JSON
            },
            body: JSON.stringify(credentials)
        }).then(data => data.json())
}

export default function Login({ setToken }){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();

        if (FunctUtilities.isStringEmpty(username)  || FunctUtilities.isStringEmpty(password === "")){
            alert("You have to enter your login and password.");
        } else {
            const token = await loginUser({
                username, password
            });
            setToken(token);
        }
    }

    return (
        <div className="login-wrapper">
            <Header />

            <body>
                <center>
                    <h3>Please login</h3>
                </center>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Username</p>
                        <input type="text" onChange={e => setUserName(e.target.value)} />
                    </label>

                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
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

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}