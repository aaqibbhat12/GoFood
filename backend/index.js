const express = require('express');
const dbConnect = require('./db');
const app = express();
const port = 4000;

// Connect to the database
dbConnect();

// Middleware for CORS headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Allow requests from http://localhost:3000
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); // Pass control to the next middleware
});

// Middleware for parsing JSON bodies
app.use(express.json());

// Routes
app.use('/api', require('./Routes/UserRoute'));

// Default route
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Start the server
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
