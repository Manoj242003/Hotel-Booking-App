import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const HotelList = ({ cart, setCart }) => {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);

  const addToCart = (hotel) => {
    setCart(prevCart => {
      const existingHotel = prevCart.find(item => item._id === hotel._id);
      
      if (existingHotel) {
        // If hotel exists, increase its quantity by 1
        return prevCart.map(item => 
          item._id === hotel._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If hotel doesn't exist, add it with quantity 1
        return [...prevCart, { ...hotel, quantity: 1 }];
      }
    });
  };
  
  
  const fetchHotels = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/hotels');
      setHotels(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching hotels:', error);
      setError('Failed to load hotels. Please try again later.');
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const HotelCard = ({ hotel, addToCart }) => (
    <div key={hotel._id} className="border rounded shadow p-4">
      {/* Updated alt text */}
      <img
        src={hotel.image}
        alt={`${hotel.name} located in ${hotel.location}`}
        className="w-full h-32 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{hotel.name}</h2>
      <p>{hotel.location}</p>
      <p>${hotel.price} per day/night</p>
      <p>Rating: {hotel.rating}/5</p>
      <div className="flex space-x-2 mt-2">
        {/* Removed Edit and Delete buttons */}
        <button
          onClick={() => addToCart(hotel)}
          className="bg-green-500 text-white py-1 px-2 rounded"
          aria-label={`Add ${hotel.name} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );

  HotelCard.propTypes = {
    hotel: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
  };

  return (
    <div className="container mx-auto mt-10">
      {error && <p className="text-red-500">{error}</p>}
      <h1 className="text-2xl font-bold mb-4">List of Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel._id}
            hotel={hotel}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

HotelList.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default HotelList;