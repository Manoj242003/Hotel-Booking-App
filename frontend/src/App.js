import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HotelList from './components/HotelList';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Home from './components/Home';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/hotels" 
          element={<HotelList cart={cart} setCart={setCart} />} // Correct prop passing
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
