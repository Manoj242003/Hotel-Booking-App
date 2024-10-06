import React from 'react';
import { FaTrashAlt, FaBook, FaMinus, FaPlus } from 'react-icons/fa'; // Import additional icons

const Cart = ({ cart, setCart }) => {
  // Function to remove hotel from cart
  const removeFromCart = (hotelId) => {
    setCart(cart.filter(item => item._id !== hotelId));
  };

  // Function to increase quantity
  const increaseQuantity = (hotelId) => {
    const updatedCart = cart.map(item => {
      if (item._id === hotelId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Function to decrease quantity
  const decreaseQuantity = (hotelId) => {
    const updatedCart = cart.map(item => {
      if (item._id === hotelId) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Function to handle booking
  const handleBooking = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Add hotels to book.');
      return;
    }
    alert('Booking confirmed! Thank you for your purchase.');
    setCart([]); // Clear cart after booking
  };

  return (
    <div className="container mx-auto mt-10 px-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-800">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((hotel) => (
            <div key={hotel._id} className="border rounded-lg shadow-lg p-6 mb-6 bg-gray-50">
              <div className="flex items-center">
                <img
                  src={hotel.image}
                  alt={`${hotel.name} in ${hotel.location}`}
                  className="w-32 h-32 object-cover rounded-lg mr-6"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800">{hotel.name}</h2>
                  <p className="text-gray-600">Location: {hotel.location}</p>
                  <p className="text-gray-600">Price: ${hotel.price} per night</p>
                  <p className="text-gray-600">Rating: {hotel.rating}/5</p>
                  {/* Display quantity */}
                  <p className="text-gray-600">Quantity: {hotel.quantity}</p>
                </div>
              </div>

              {/* Quantity and remove button */}
              <div className="flex justify-between items-center mt-4">
                {/* Increase/Decrease quantity */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => decreaseQuantity(hotel._id)}
                    className="bg-gray-300 text-gray-700 p-2 rounded-lg hover:bg-gray-400 transition duration-200"
                  >
                    <FaMinus />
                  </button>

                  <span className="text-gray-800 font-semibold">{hotel.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(hotel._id)}
                    className="bg-gray-300 text-gray-700 p-2 rounded-lg hover:bg-gray-400 transition duration-200"
                  >
                    <FaPlus />
                  </button>
                </div>

                {/* Remove from cart and Book Now buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => removeFromCart(hotel._id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200"
                  >
                    <FaTrashAlt className="mr-2" /> Remove
                  </button>

                  <button
                    onClick={handleBooking}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-200"
                  >
                    <FaBook className="mr-2" /> Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;