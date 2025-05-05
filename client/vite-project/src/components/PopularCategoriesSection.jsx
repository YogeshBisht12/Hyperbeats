import React from 'react';
import burgers from '../assets/images/categories/burger.jpg';
import salads from '../assets/images/categories/salads.jpg';
import pasta from '../assets/images/categories/pasta.jpg';
import pizza from '../assets/images/categories/pizza.jpg';
import breakfast from '../assets/images/categories/breakfast.jpg';
import soups from '../assets/images/categories/soup.jpg';

const categories = [
  {
    image: burgers,
    title: 'Burgers & Fast food',
    count: '21 Restaurants',
  },
  {
    image: salads,
    title: 'Salads',
    count: '20 Restaurants',
  },
  {
    image: pasta,
    title: 'Pasta & Casuals',
    count: '4 Restaurants',
  },
  {
    image: pizza,
    title: 'Pizza',
    count: '32 Restaurants',
  },
  {
    image: breakfast,
    title: 'Breakfast',
    count: '4 Restaurants',
  },
  {
    image: soups,
    title: 'Soups',
    count: '2 Restaurants',
  },
];

const PopularCategoriesSection = () => {
  return (
    <section className="w-full py-16 px-6 lg:px-20 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-12">
        🍽️ Hyperbeats <span className="text-orange-500">Popular Categories</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-28 object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy" // Lazy loading applied here
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-sm font-semibold text-gray-800">{cat.title}</h3>
              <p className="text-xs text-gray-500">{cat.count}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategoriesSection;
