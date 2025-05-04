import React from 'react';
import mcdonalds from '../assets/images/restaurants/mcd.png';
import papaJohns from '../assets/images/restaurants/papajohns.png';
import kfc from '../assets/images/restaurants/kfc.png';
import texasChicken from '../assets/images/restaurants/texas.png';
import burgerKing from '../assets/images/restaurants/bk.png';
import shaurma from '../assets/images/restaurants/shaurma.png';

const restaurants = [
  { image: mcdonalds, name: 'McDonald’s' },
  { image: papaJohns, name: 'Papa Johns' },
  { image: kfc, name: 'KFC' },
  { image: texasChicken, name: 'Texas Chicken' },
  { image: burgerKing, name: 'Burger King' },
  { image: shaurma, name: 'Shaurma' },
];

const PopularRestaurantsSection = () => {
  return (
    <section className="w-full py-16 px-6 lg:px-20 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
        🍔 Popular <span className="text-orange-500">Restaurants</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {restaurants.map((res, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 p-4 flex flex-col items-center"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-3">
              <img
                src={res.image}
                alt={res.name}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm sm:text-base font-medium text-gray-800 text-center">
              {res.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRestaurantsSection;
