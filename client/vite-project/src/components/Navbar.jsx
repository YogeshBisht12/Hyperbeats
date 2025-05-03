import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Browse Menu', path: '/menu' },
  { name: 'Special Offers', path: '/offers' },
  { name: 'Restaurants', path: '/restaurants' },
  { name: 'Track Order', path: '/track' },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white shadow-sm border-b border-gray-200"
    >
      {/* Promo Bar */}
      <motion.div
        className="flex justify-between items-center text-sm text-gray-600 px-6 py-2 bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span>
          Get 5% Off your first order,{' '}
          <span className="text-orange-500 font-medium">Promo: ORDERS</span>
        </span>
        <span>
          <span className="mr-2">Alpha 2, Greater Noida</span>
          <a href="#" className="text-orange-500 font-semibold hover:underline">Change Location</a>
        </span>
      </motion.div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          className="text-3xl font-extrabold text-[#1e293b]"
          whileHover={{ scale: 1.05 }}
        >
          Hyper<span className="text-orange-500">eats</span>
        </motion.div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-2 font-medium text-gray-800">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative px-4 py-2 rounded-full cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="absolute inset-0 bg-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out z-0"></span>
              <Link to={item.path} className="relative z-10 group-hover:text-white transition duration-300">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative bg-green-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-md cursor-pointer"
          >
            Cart
          </motion.div>

          {/* Login Button */}
          <Link
            to="/login"
            className="px-4 py-2 rounded-md bg-[#0f172a] text-white text-sm font-semibold hover:bg-orange-500 transition shadow-md"
          >
            Login/Signup
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
