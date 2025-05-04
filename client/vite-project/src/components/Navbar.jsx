import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Browse Menu', path: '/menu' },
  { name: 'Special Offers', path: '/offers' },
  { name: 'Restaurants', path: '/restaurants' },
  { name: 'Track Order', path: '/track' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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

        {/* Desktop Menu */}
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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-orange-500 focus:outline-none">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative bg-green-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-md cursor-pointer"
          >
            Cart
          </motion.div>
          <Link
            to="/login"
            className="px-4 py-2 rounded-md bg-[#0f172a] text-white text-sm font-semibold hover:bg-orange-500 transition shadow-md"
          >
            Login/Signup
          </Link>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-white px-6 pb-4 space-y-3"
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 hover:text-orange-500 font-medium transition"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-3 flex flex-col space-y-2">
              <Link
                to="/login"
                className="w-full text-center py-2 bg-[#0f172a] text-white font-semibold rounded hover:bg-orange-500"
              >
                Login/Signup
              </Link>
              <div className="w-full text-center py-2 bg-green-600 text-white font-semibold rounded">
                Cart
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
