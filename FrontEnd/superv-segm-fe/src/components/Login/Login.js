// General components 
import React, { useState } from "react";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Snackbar, Alert } from "@mui/material";
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

    const [isSnackbarVisible, setSnackbarVisible] = useState(false);
    const [messageAlert, setMessageAlert] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();

        if (FunctUtilities.isStringEmpty(username)  || FunctUtilities.isStringEmpty(password === "")){
            //alert("You have to enter your login and password.");
            setMessageAlert("You have to enter your login and password.");
            setSnackbarVisible(true);
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
                <form>
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
                        <center>
                            <Button variant="outlined" onClick={handleSubmit}>
                                Login
                            </Button>
                            
                            <br /><br />
                        </center>
                    </div>
                </form>
            </body>
            <Snackbar
                open={isSnackbarVisible}
                autoHideDuration={5000}
                onClose={() => setSnackbarVisible(false)}
            >
                <Alert
                    severity={'warning'}
                    sx={{ width: '100%' }}
                    onClose={() => { 
                        setMessageAlert("");
                        setSnackbarVisible(false);
                    }}
                    >
                    {messageAlert}
                </Alert>
            </Snackbar>

            <Footer />
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}