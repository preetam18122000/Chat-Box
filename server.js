//This file stores the BE code of the application
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.use(express.static('public'));

const userNames = {};
const rooms = [
    { name: "globalChat", creator: "anonymous"},
    { name: "privateChat", creator: "anonymous"},
    { name: "selfChat", creator: "anonymous"}
]


//whenever we have the connection on BE, the below function will be executed, thus whole code will be inside it
io.on('connection', function(socket) {
    //Because when the connection is established we are sending createUser from FE. 
    //We pass userName from FE, which we will get name in function parameter
    socket.on("createUser", function(username){
        //here we are extending the socket object itself because it will not change throughout
        socket.username = username;
        userNames[username] = username;
        socket.currentRoom = "globalChat";

        socket.join("globalChat"); // this creates a chat room
        socket.emit("updateChat", "INFO", "You have joined globalChat");
    }) 

    socket.on("sendMessage", function(data){
        //we need to send this message to every person in the chat room
        io.sockets.to(socket.currentRoom).emit("updateChat", socket.username, data); // this will send the message in current room
    })
})

server.listen(4000, ()=>{
    console.log('server is running at PORT:4000');
})
