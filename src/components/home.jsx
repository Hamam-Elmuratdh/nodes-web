import { Redirect } from "react-router-dom";
import React, { useState } from 'react'
import { Chat } from './chat.jsx'
import Axios from 'axios';
// import Input from '@material-ui/core/Input'
export function Home(props) {

    const [loggedIn, setLoggedIn] = useState(true)

    if (!loggedIn) {
        return <Redirect to='/login' />
    }


    // setInterval(function () {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }

    Axios.post('https://nodes-chat-app.herokuapp.com/auth', {}, {
        headers: headers
    })
        .then((response) => {
            if (response.data === "valid") {
                console.log("ITS ALL GOOD BABY")
            }

        })
        .catch((err) => {
            var username = localStorage.getItem("username")
            var data = {
                "username": username,
                "refreshToken": localStorage.getItem("refreshToken")
            }

            Axios.post('https://nodes-chat-app.herokuapp.com/refresh', data)
                .then((response) => {
                    localStorage.setItem("token", response.token)
                })
                .catch(() => {
                    localStorage.removeItem("token")
                    setLoggedIn(false)
                }
                )
        })
    // },
    //     //change this later
    //     50000000000000000000000000000000000000000000000000000
    // )




    return (
        <div >

            <Chat />

        </div>
    )

}




export default Home