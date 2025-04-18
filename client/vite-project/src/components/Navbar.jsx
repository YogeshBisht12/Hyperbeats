import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200">
      {/* Top bar */}
      <div className="flex justify-between items-center text-sm text-gray-600 px-6 py-2 bg-[#fef3c7]">
        <span>
          Get 5% Off your first order,{' '}
          <span className="text-orange-500 font-medium">Promo: ORDERS</span>
        </span>
        <span>
          <span className="mr-2">Alpha 2, Greater Noida</span>
          <a href="#" className="text-orange-500 font-semibold">Change Location</a>
        </span>
      </div>

      {/* Main navbar */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-[#1e293b]">
          Hyper<span className="text-orange-500">eats</span>
        </div>

        {/* Menu links */}
        <div className="flex space-x-2 font-medium text-gray-800 ">
          {[
            { name: "Home" },
            { name: "Browse Menu" },
            { name: "Special Offers" },
            { name: "Restaurants" },
            { name: "Track Order" }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative px-4 py-2 rounded-full cursor-pointer transition duration-300 overflow-hidden"
            >
              {/* Orange circle background on hover */}
              <span className="absolute inset-0 bg-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out z-0"></span>

              {/* Text */}
              <a
                href="#"
                className="relative z-10 group-hover:text-white transition duration-300"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <div className="relative bg-green-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold">
            <span>Cart</span>
          </div>

          {/* Login */}
          <a
            href="#"
            className="px-4 py-2 rounded-md bg-[#0f172a] text-white text-sm font-semibold hover:bg-orange-500 transition"
          >
            Login/Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
