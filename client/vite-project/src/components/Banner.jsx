import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 flex flex-col md:flex-row items-center justify-center md:justify-between">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 relative">
        <img
          src="/src/assets/images/laughing.png"
          alt="People ordering"
          className="w-[500px] md:w-[600px] h-auto object-cover -mt-8"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl font-sans md:text-6xl  font-extrabold leading-tight text-gray-800">
          Order<span className="text-orange-500 font-extrabold">.He</span>ing is more
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold">
          <span className="text-orange-500">Personalised</span>{' '}
          <span className="text-blue-900">& Instant</span>
        </h2>

        {/* Black bar */}
        <div className="w-24 h-1 bg-orange-400 my-4"></div>

        <p className="text-md md:text-lg text-gray-700">
          Download the Hypereats app for faster ordering
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-4 mt-6">
          <a
            href="#"
            className="flex items-center bg-black text-white px-5 py-3 rounded-md space-x-2 hover:bg-gray-800 transition"
          >
            <FaApple className="text-2xl" />
            <span className="text-lg font-semibold">App Store</span>
          </a>
          <a
            href="#"
            className="flex items-center bg-black text-white px-5 py-3 rounded-md space-x-2 hover:bg-gray-800 transition"
          >
            <FaGooglePlay className="text-2xl" />
            <span className="text-lg font-semibold">Google Play</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
