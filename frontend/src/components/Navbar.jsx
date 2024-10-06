
import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router

const Navbar = () => {
  return (
    <nav className='bg-gray-800 p-4 flex justify-between'>
      <h1 className='text-white text-lg font-bold'>NASA App</h1>
      <ul className='flex space-x-4'>
        <li>
          <Link to="/" className='text-gray-300 hover:text-white'>Home</Link>
        </li>
        <li>
          <Link to="/asteroidtracker" className='text-gray-300 hover:text-white'>Asteroid Tracker</Link>
        </li>
        <li>
          <Link to="/map" className='text-gray-300 hover:text-white'>Wildfire Tracker</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

