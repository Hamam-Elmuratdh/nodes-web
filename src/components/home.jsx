import { Redirect } from "react-router-dom";
import React, { useState } from 'react'
import Axios from 'axios';

export function Home() {
    const [loggedIn, setLoggedIn] = useState(true)

    if (!loggedIn) {
        return <Redirect to='/login' />
    }

    setInterval(function () {
        let headers = {
            'Content-Type': 'application/json',
            'authorization': `bearer ${localStorage.getItem("token")}`
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


    }, 5000)



    return (
        <div >
            hi

        </div>
    )

}




export default Home