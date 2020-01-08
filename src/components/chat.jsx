import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


//set room name id here !!!

var socketed = io('http://localhost:5001', {
    Headers: {
        authorization: `bearer ${localStorage.getItem("token")}`
    }
})

socketed.on('connect', () => {
    console.log('connected!');
})

export function Chat(props) {
    //using hooks
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
        < div >
            THIS is the CHAT SECTION
            < br />
            <br />
            <br />
            <div className="message-container">
                <form
                    onSubmit={handleSubmit}
                    style={{ padding: "300px" }}>
                    <Input
                        type="text"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        multiline></Input>
                    <Button
                        type="submit"
                        color="secondary"
                    >Send</Button>
                </form>
            </div>
        </div >
    )
}
