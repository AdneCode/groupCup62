const corsMiddleWare = require('cors');
const { Server } = require('socket.io');
const PORT = 4000;

//Server setup
const express = require('express');
const app = express();

// Socket setup
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);

let tournaments = [];
let games = [];
let users = [];
let timer = 0;

//every millisecond, the timer is raised by 1
const raiseTimer = () => {
    const updateGame = require('./functions/updateGame');
    if (timer > 20) return (timer = -1);
    timer += 1;
    if (timer === 0) {
        if (!games || games.length === 0) return;
        const newGames = games.map((i) => {
            updateGame(i);
        });
        games = newGames;
        io.emit('receiveUpdate', games);
    }
};
setInterval(raiseTimer, 1);

app.use(corsMiddleWare());
app.use(express.json());

//Every socket.on and socket.emit needs to be wrapped around "io.on('connection, socket)"
io.on('connection', (socket) => {
    socket.on('joinTournament', (name, tournamentId) => {
        console.log(tournamentId);
        socket.emit(socket.id);
    });

    //event for when a client wants to create a new game
    socket.on('createGame', (name, tournamentId) => {
        console.log(tournamentId);
        socket.emit(socket.id);
    });

    //event when client is sending an input direction to the server
    socket.on('sendInput', (direction) => {});
});

server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

module.exports = server;
