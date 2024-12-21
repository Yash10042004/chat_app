/*// Import required modules
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

// Create an Express application
const app = express();
const server = http.createServer(app); // Create an HTTP server
const io = socketIo(server, {
    cors: {
        origin: "*", // Allow all origins
        methods: ["GET", "POST"] // Allow GET and POST methods
    }
});

// Use CORS middleware
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Listen for client connections
io.on('connection', (socket) => {
    console.log('New client connected');

    // Listen for sendMessage events from clients
    socket.on('sendMessage', (message) => {
        // Broadcast the message to all connected clients
        io.emit('receiveMessage', message);
    });

    // Listen for client disconnections
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start the server on port 4000
server.listen(4000,'0.0.0.0', () => {
    console.log('Listening on port 4000');
});*/
// Import required modules
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

// Create an Express application
const app = express();
const server = http.createServer(app); // Create an HTTP server
const io = socketIo(server, {
    cors: {
        origin: "*", // Allow all origins
        methods: ["GET", "POST"] // Allow GET and POST methods
    }
});

// Use CORS middleware
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Listen for client connections
io.on('connection', (socket) => {
    console.log('New client connected');

    // Listen for sendMessage events from clients
    socket.on('sendMessage', (message) => {
        // Broadcast the message to all connected clients
        io.emit('receiveMessage', message);
    });

    // Listen for client disconnections
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start the server on port 4000
server.listen(4000, '0.0.0.0', () => { // Listen on all network interfaces
    console.log('Listening on port 4000');
});

