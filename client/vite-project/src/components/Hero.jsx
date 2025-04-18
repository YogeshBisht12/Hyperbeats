import React from 'react';
import heroImage from '../assets/images/Untitled-2 1.png'; 
import shadowImage from'../assets/images/shadow.png'


const Hero = () => {
return (
  <>
    <section className="w-full relative overflow-hidden">
      {/* Purple Background */}
    <div className="absolute inset-0 bg-[#0f172a] z-0"></div>

    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12">
        {/* Left Side Text */}
        <div className="max-w-xl text-white">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Feast Your Senses,<br />
            <span className="text-orange-500">Fast and Fresh</span>
        </h1>
        <p className="text-gray-300 mt-4">
            Order Restaurant food, takeaway and groceries.
        </p>

          {/* Search bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <input
            type="text"
            placeholder="e.g. EC4R 3TE"
            className="px-4 py-3 w-full sm:w-72 rounded-md border border-gray-300 focus:outline-none text-white"
            />
            <button className="px-6 py-3 bg-orange-500 text-white rounded-md font-semibold hover:bg-orange-600 transition">
            Search
            </button>
        </div>
        </div>

        {/* Shadow image */}

        <div>
          
        <img
        src={shadowImage}
        alt="shadowImage"
        className="absolute z-10 top-8 right-28"
        />
        </div>

        {/* Right Side Image with Floating Cards */}
        <div className="relative mt-10 lg:mt-0 w-full lg:w-[50%] flex justify-center">
          {/* Orange background blob */}
        <div className="absolute  -right-16 w-96 h-screen bg-orange-400 rounded-bl-[100px] rounded-tl-[100px] z-0"></div>


          {/* Main Hero Image */}
        <img
            src={heroImage}
            alt="Hero Girl"
            className="relative z-10 w-[320px] lg:w-[380px] top-12"
        />

          {/* Floating  cards */}
        <div className="absolute top-6 right-4 w-64 z-20 shadow-md bg-white rounded-lg p-3 text-sm hidden lg:block">
            <p className="font-semibold text-gray-800">Order 1</p>
            <p className="text-gray-500">We've received your order!</p>
        </div>
        <div className="absolute top-32 -right-10 w-64 z-20 shadow-md bg-white rounded-lg p-3 text-sm hidden lg:block">
            <p className="font-semibold text-gray-800">Order 2</p>
            <p className="text-green-600">Order Accepted ✅</p>
        </div>
        <div className="absolute top-72 -right-14 w-64 z-20 shadow-md bg-white rounded-lg p-3 text-sm hidden lg:block">
            <p className="font-semibold text-gray-800">Order 3</p>
            <p className="text-orange-500">Your rider is nearby 🛵</p>
        </div>
        </div>
    </div>
    </section>


    
    </>



);
};

export default Hero;
