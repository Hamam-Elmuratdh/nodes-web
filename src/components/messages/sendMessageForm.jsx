import React, { useState, useEffect } from 'react'
import io from 'socket.io-client';

var socketed = io('http://localhost:5001', {
    query: {
        'authorization': `bearer ${localStorage.getItem("token")}`
    }
})
socketed.on('connect', () => {
    console.log('connected!');
})

export function SendMessageForm() {

    const [message, setMessage] = useState('')
    const [socket, setSocket] = useState()

    useEffect(() => {
        setSocket(socketed)
    }, [])

    var handleSubmit = (e) => {
        e.preventDefault()
        //submit the form 
        socket.emit("MESSAGE", { "message": message, "senderNickname": 'adam' })
        setMessage('');
    }
    return (
        <form className="send-message-form">
            <input
                placeholder="SendMessageForm"
                type="text" />
        </form>
    )
}


export default SendMessageForm