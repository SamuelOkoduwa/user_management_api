const app = require('./src/app');
const http = require('http');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();
// Set the port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;
// Initialize the database connection

// Create an HTTP server
const server = http.createServer(app);

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

module.exports = server;