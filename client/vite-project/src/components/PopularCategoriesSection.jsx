import React from 'react';
import burgers from '../assets/images/categories/burger.jpg';
import salads from '../assets/images/categories/salads.jpg';
import pasta from '../assets/images/categories/salads.jpg';
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
    <section className="w-full py-8 px-6 lg:px-16 bg-white">
    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-7">
        Hyperbeats Popular Categories <span className="text-xl"></span>
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((cat, index) => (
        <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg hover:scale-105 transition transform duration-300"
        >
            <img
            src={cat.image}
            alt={cat.title}
            className="w-full h-28 object-cover rounded-t-xl"
            />
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
