import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'
export function SignUp(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [correctPass, setcorrectPass] = useState();
    var handleSubmit = () => {

        passwordChecker()
        if (!correctPass) {
            //change to set the class of the form to red  an
            return;

        }
        let user = {
            username,
            password
        };

        fetch("https://nodes-chat-app.herokuapp.com/signup", {
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
            })

    };
    var passwordChecker = () => {
        password === confirmPassword ? setcorrectPass(true) : setcorrectPass(false);
    };

    return (
        <div className="signup-container">
            <form className="signup-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit()
                }}>
                <label > username </label>
                <Input
                    placeholder="Enter user name"
                    type="text"
                    value={username}
                    onChange={e => {
                        setUsername(e.target.value);
                    }}
                ></Input>
                <br />
                <label > password </label>
                <Input
                    placeholder="enter password"
                    type="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                ></Input>
                <br />
                <label > Confirm password </label>
                <Input
                    placeholder="confirm your password"
                    type="password"
                    value={confirmPassword}
                    onChange={e => setconfirmPassword(e.target.value)}
                ></Input>
                <br />
                <Button type="submit" variant="contained" color="primary" >SUBMIT</Button>
            </form>
            <div>{correctPass === false ? <h1>PASSWORD DOES NOT MATCH</h1> : ''}</div>
        </div>
    )
}
export default SignUp