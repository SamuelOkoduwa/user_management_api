const express = require('express');
const db = require('./config/database');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const { errorHandler } = require('./modules/middleware/errorHandler');

// Load environment variables from .env file
const dotenv = require('dotenv');
dotenv.config();

// Initialize the database connection
db.init()


// Create an Express application
const app = express();

app.use(express.json());
app.use(morgan('combined'));    // Middleware for logging HTTP requests
app.use(cors());                 // Middleware for handling CORS
app.use(helmet());              // Middleware for setting security headers
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limit each IP to 100 requests per windowMs
}));
// Middleware for compressing responses
app.use(compression());

app.use(express.urlencoded({ extended: true }));    //

app.get('/', (req, res) => {
    res.send('Welcome to the User Management API');
});

// Import and use the auth routes
const authRoutes = require('./modules/auth/routes/authRoutes');
app.use('/api/auth', authRoutes);

module.exports = app;