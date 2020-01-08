import io from 'socket.io-client';

io('http://localhost:5000').on('connect', () => {
    console.log('connected!')
})

module.exports = { socket }