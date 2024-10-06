import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current location for active link styling

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path ? 'font-bold' : '';

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Hotel Hub</h1>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className={`text-white ${isActive('/')}`}>Home</Link>
          <Link to="/hotels" className={`text-white ${isActive('/hotels')}`}>Hotels</Link>
          <Link to="/cart" className={`text-white ${isActive('/cart')}`}>Cart</Link>
          <Link to="/profile" className={`text-white ${isActive('/profile')}`}>Profile</Link> {/* Profile link */}
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-600">
          <Link to="/" className="block text-white px-4 py-2">Home</Link>
          <Link to="/hotels" className="block text-white px-4 py-2">Hotels</Link>
          <Link to="/cart" className="block text-white px-4 py-2">Cart</Link>
          <Link to="/profile" className="block text-white px-4 py-2">Profile</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
