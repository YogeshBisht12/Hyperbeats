import React from 'react';
import food1 from '../assets/images/populardishes/food1.jpg';
import food2 from '../assets/images/populardishes/food2.jpg';
import food3 from '../assets/images/populardishes/food3.jpg';

const PopularDishesSection = () => {
return (
    <section className="w-full py-7 px-6 lg:px-16 bg-white">
    
    <h1 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4 text-center">
        <span className="text-orange-500 font-bold text-2xl">Up to -40%</span> 🎉{" "}
        <span className="text-gray-900 font-semibold">Order.uk</span>{" "}
        <span className="text-gray-500">exclusive deals</span>
    </h1>

      {/* Section Title */}
    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
        Popular Dishes 🍽️
    </h2>

      {/* Dishes */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition transform duration-300">
        <img src={food1} alt="Dish 1" className="w-full h-56 object-cover" />
        <div className="p-4">
            <h3 className="text-lg font-semibold">Delicious Pizza</h3>
            <p className="text-sm text-gray-500">32 Restaurants</p>
        </div>
        </div>

    
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition transform duration-300">
        <img src={food2} alt="Dish 2" className="w-full h-56 object-cover" />
        <div className="p-4">
            <h3 className="text-lg font-semibold">Fish</h3>
            <p className="text-sm text-gray-500">20 Restaurants</p>
        </div>
        </div>

    
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition transform duration-300">
        <img src={food3} alt="Dish 3" className="w-full h-56 object-cover" />
        <div className="p-4">
            <h3 className="text-lg font-semibold">Tasty Mushrooms</h3>
            <p className="text-sm text-gray-500">15 Restaurants</p>
        </div>
        </div>
    </div>
    </section>
);
};

export default PopularDishesSection;
