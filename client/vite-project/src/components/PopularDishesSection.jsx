import React from 'react';
import food1 from '../assets/images/populardishes/food1.jpg';
import food2 from '../assets/images/populardishes/food2.jpg';
import food3 from '../assets/images/populardishes/food3.jpg';

const PopularDishesSection = () => {
  return (
    <section className="w-full py-16 px-6 lg:px-20 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Discount Banner */}
      <h1 className="text-center text-2xl lg:text-3xl font-bold mb-4 text-gray-800">
        <span className="text-orange-500 text-3xl font-extrabold">Up to -40%</span> 🎉{" "}
        <span className="text-gray-900">Order.uk</span>{" "}
        <span className="text-gray-500 font-medium">exclusive deals</span>
      </h1>

      {/* Section Title */}
      <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-12">
        Popular Dishes 🍽️
      </h2>

      {/* Dishes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[{ img: food1, title: "Delicious Pizza", count: 32 },
          { img: food2, title: "Fresh Fish", count: 20 },
          { img: food3, title: "Tasty Mushrooms", count: 15 }].map((dish, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="overflow-hidden">
              <img
                src={dish.img}
                alt={dish.title}
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110 rounded-t-2xl"
                loading="lazy" // Lazy loading added here
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{dish.title}</h3>
              <p className="text-sm text-gray-500">{dish.count} Restaurants</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDishesSection;
