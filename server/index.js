const http = require('http');
const express = require('express');
const cors = require('cors');
const socketIO = require("socket.io");
const { socket } = require('dgram');

const app = express();
const port = 4500 || process.env.PORT;
const users = [{}];

app.use(cors());
app.get("/", (req, res) => {
    res.send("Hell IS Working.");
})


const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
    console.log("New Connection");

    

    socket.on('joined', ({ user }) => {
        users[socket.id] = user;
        console.log(`${user} has joined`);

    })

    socket.emit('Welcome', {user: "Admin", message: "Welcome to chatiFy"});
    


});
server.listen(port, () => {
    console.log(`Server is working on http://localhost:${port}`);
})