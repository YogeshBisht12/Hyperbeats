import React from 'react';
import mcdonalds from '../assets/images/restaurants/mcd.png';
import papaJohns from '../assets/images/restaurants/papajohns.png';
import kfc from '../assets/images/restaurants/kfc.png';
import texasChicken from '../assets/images/restaurants/texas.png';
import burgerKing from '../assets/images/restaurants/bk.png';
import shaurma from '../assets/images/restaurants/shaurma.png';

const restaurants = [
{ image: mcdonalds,  },
{ image: papaJohns,  },
{ image: kfc, },
{ image: texasChicken,  },
{ image: burgerKing,  },
{ image: shaurma,  },
];

const PopularRestaurantsSection = () => {
return (
    <section className="w-full py-12 px-6 lg:px-16 bg-white">
    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
        Popular Restaurants
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {restaurants.map((res, index) => (
        <div
            key={index}
            className=" shadow-sm rounded-xl flex flex-col items-center justify-center p-4 hover:shadow-md hover:scale-105 transition-transform duration-300"
        >
            <img
            src={res.image}
            alt={res.name}
            className="object-contain mb-2"
            />
            <p className="text-sm font-medium text-center text-gray-800">{res.name}</p>
        </div>
        ))}
    </div>
    </section>
);
};

export default PopularRestaurantsSection;
