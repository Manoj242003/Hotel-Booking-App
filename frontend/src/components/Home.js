import React, { useState } from 'react';
import HotelList from './HotelList';
import Cart from './Cart'; // Ensure the Cart component is imported

const Home = () => {
  // Define the cart state and the setter function
  const [cart, setCart] = useState([]);

  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold">Welcome to Hotel Booking</h1>
      <p className="mt-4">Find your perfect hotel!</p>
      
      {/* Pass cart and setCart as props to HotelList */}
      <HotelList cart={cart} setCart={setCart} />
      
      {/* Render the Cart component and pass the cart and setCart as props */}
      {cart.length > 0 && (
        <div className="mt-10">
          <Cart cart={cart} setCart={setCart} />
        </div>
      )}
    </div>
  );
};

export default Home;