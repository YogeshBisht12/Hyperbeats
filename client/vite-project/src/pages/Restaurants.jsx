import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaUtensils } from "react-icons/fa";

const restaurants = [
  {
    id: 1,
    name: "McDonald's",
    cuisine: "American",
    image: "/src/assets/images/restaurants/mcd.png",
  },
  {
    id: 2,
    name: "Papa Johns",
    cuisine: "American",
    image: "/src/assets/images/restaurants/papajohns.png",
  },
  {
    id: 3,
    name: "KFC",
    cuisine: "American",
    image: "/src/assets/images/restaurants/kfc.png",
  },
  {
    id: 4,
    name: "Texas Chicken",
    cuisine: "American",
    image: "/src/assets/images/restaurants/texas.png",
  },
  {
    id: 5,
    name: "Burger King",
    cuisine: "American",
    image: "/src/assets/images/restaurants/bk.png",
  },
  {
    id: 6,
    name: "Shaurma",
    cuisine: "American",
    image: "/src/assets/images/restaurants/shaurma.png",
  },
];

export default function Restaurants() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 tracking-tight">
          Our Partner <span className="text-orange-500">Restaurants</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {restaurants.map((rest, i) => (
            <div
              key={rest.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-orange-200"
            >
              <div className="overflow-hidden relative group">
                <img
                  src={rest.image}
                  alt={rest.name}
                  className="h-60 w-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <FaUtensils className="text-white text-4xl drop-shadow-lg" />
                </div>
              </div>
              <div className="p-5 text-left bg-white">
                <h3 className="text-xl font-bold text-gray-800">{rest.name}</h3>
                <p className="text-orange-600 font-medium mt-1">{rest.cuisine}</p>
                <p className="text-sm text-gray-500">Popular worldwide</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
