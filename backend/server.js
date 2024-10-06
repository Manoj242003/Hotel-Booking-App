const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Adjust path as necessary
const hotelRoutes = require('./routes/hotelRoutes'); // Your existing hotel routes

const app = express();
app.use(cors());
app.use(express.json());

require('dotenv').config(); // Load environment variables

const dbURI = process.env.MONGODB_URI; // Use the connection string from .env

mongoose.connect(dbURI).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api', authRoutes); // Authentication routes
app.use('/api/hotels', hotelRoutes); // Hotel routes

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
