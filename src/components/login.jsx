import React, { useState } from "react";
import Button from '@material-ui/core/Button';

import { Redirect } from 'react-router';


export function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    var handleSubmit = e => {
        e.preventDefault();
        let user = {
            username,
            password
        };

        fetch("https://nodes-chat-app.herokuapp.com/signin", {
            method: "POST",

            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(user)
        }).then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                localStorage.setItem("username", username)
                localStorage.setItem("token", data.token);
                localStorage.setItem("refreshToken", data.refreshToken);

                setPassword('')
                setUsername('')
                Redirect("/home")
                // <Redirect to='/home' />
            })
    }


    return (
        <form className="signin-form"
            onSubmit={handleSubmit}>
            <label > username </label>
            <input
                placeholder="Enter user name"
                type="text"
                value={username}
                onChange={e => {
                    setUsername(e.target.value);
                }}
            ></input>
            <label > password </label>
            <input
                placeholder="enter password"
                type="password"
                value={password}
                onChange={e => {
                    setPassword(e.target.value);
                }}
            ></input>
            <br />
            <Button type="submit" variant="contained" color="primary" >SUBMIT</Button>
        </form>
    )
}
export default Login
