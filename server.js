const express = require('express');
const useSocket = require('socket.io')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
    }
});

const rooms = new Map()



app.get('/rooms', (req, res)=>{
    res.json(rooms)
})


app.post('/rooms', (req, res)=>{
    res.send()
})





io.on('connection', (socket)=>{
    console.log('user connected', socket.id)
})


server.listen(5000, (err)=>{
    if(err){
        throw Error(err)
    }
    console.log('Сервер запущено!')
})