const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel'); // Adjust this path if necessary

// Get all hotels
router.get('/', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a hotel
router.post('/', async (req, res) => {
  const hotel = new Hotel(req.body);
  try {
    const newHotel = await hotel.save();
    res.status(201).json(newHotel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

// Update a hotel
router.put('/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(hotel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get a single hotel by ID
router.get('/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.json(hotel);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
