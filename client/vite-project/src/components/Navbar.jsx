import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../pages/CartContext';
import { useAuth } from './AuthContext';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Browse Menu', path: '/menu' },
  { name: 'Special Offers', path: '/offers' },
  { name: 'Restaurants', path: '/restaurants' },
  { name: 'Track Order', path: '/track' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const { cartItems = [] } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const cartCount = cartItems.length;

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/90 ${
        hasShadow ? 'shadow-xl border-b border-orange-200' : ''
      }`}
    >
      {/* Promo Bar */}
      <div className="hidden sm:flex justify-between items-center text-base text-white px-6 py-2 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 font-semibold">
        <span>🎉 5% Off on First Order — <span className="font-bold">Code: ORDERS</span></span>
        <span>📍 Alpha 2, Greater Noida · <a href="#" className="underline hover:text-black">Change</a></span>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-4xl font-extrabold text-slate-800">
          Hyper<span className="text-orange-500">eats</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg font-semibold text-gray-700">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative group transition-all"
            >
              <span className="relative z-10 group-hover:text-orange-600">
                {item.name}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-5">
          <Link to="/cart" className="relative">
            <FiShoppingCart className="text-3xl text-orange-600 hover:scale-110 transition duration-300" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-md">
                {cartCount}
              </span>
            )}
          </Link>
          {user ? (
            <>
              <span className="text-lg text-gray-700">👋 {user.name || 'User'}</span>
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 rounded-md text-base font-bold hover:scale-105 shadow transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-md text-base font-bold hover:scale-105 shadow transition"
            >
              Login / Signup
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-4xl text-orange-500">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-white px-6 pb-4 space-y-3 border-t border-orange-200"
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-semibold text-gray-800 hover:text-orange-500"
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-3 flex flex-col space-y-2">
              {user ? (
                <>
                  <span className="text-gray-700 font-medium text-lg">👋 {user.name || 'User'}</span>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2 bg-purple-600 text-white font-bold rounded hover:bg-purple-700"
                >
                  Login / Signup
                </Link>
              )}
              <Link
                to="/cart"
                className="w-full text-center py-2 bg-green-500 text-white font-bold rounded relative"
              >
                Cart
                {cartCount > 0 && (
                  <span className="absolute top-0 right-3 -mt-1 -mr-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
