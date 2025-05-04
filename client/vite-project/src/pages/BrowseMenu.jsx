import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiShoppingCart } from "react-icons/fi";

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: "₹199",
    image: "/src/assets/images/pizza1.jpg",
  },
  {
    id: 2,
    name: "Paneer Pizza",
    category: "Pizza",
    price: "₹249",
    image: "/src/assets/images/pizza2.jpg",
  },
  {
    id: 3,
    name: "Sweet corn Pizza",
    category: "Pizza",
    price: "₹149",
    image: "/src/assets/images/pizza3.jpg",
  },
  {
    id: 4,
    name: "Udta Punjab Burger",
    category: "Burgers",
    price: "₹199",
    image: "/src/assets/images/burger1.jpg",
  },
  {
    id: 5,
    name: "Veg Makhani Burger",
    category: "Burgers",
    price: "₹139",
    image: "/src/assets/images/burger2.jpg",
  },
  {
    id: 6,
    name: "Spicy Chicken Burger",
    category: "Burgers",
    price: "₹199",
    image: "/src/assets/images/burger3.jpg",
  },
  {
    id: 7,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    price: "₹209",
    image: "/src/assets/images/dessert1.jpg",
  },
  {
    id: 8,
    name: "Chocolate Truffle Cake",
    category: "Desserts",
    price: "₹519",
    image: "/src/assets/images/dessert2.jpg",
  },
  {
    id: 9,
    name: "Red Velvet Cake",
    category: "Desserts",
    price: "₹564",
    image: "/src/assets/images/dessert3.jpg",
  },
  {
    id: 10,
    name: "Coca Cola",
    category: "Drinks",
    price: "₹66",
    image: "/src/assets/images/drink1.jpg",
  },
  {
    id: 11,
    name: "Thums Up",
    category: "Drinks",
    price: "₹66",
    image: "/src/assets/images/drink2.jpg",
  },
  {
    id: 12,
    name: "Mango juice",
    category: "Drinks",
    price: "₹66",
    image: "/src/assets/images/drink3.jpg",
  },
];

const categories = ["All", "Pizza", "Burgers", "Desserts", "Drinks"];

export default function BrowseMenu() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      itemsRef.current,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      }
    );
  }, [filteredItems]);

  return (
    <section
      className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20 px-6"
      id="browse-menu"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800 tracking-tight">
          Browse <span className="text-orange-500">Menu</span>
        </h2>

        {/* Search Input */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search dishes..."
            className="w-full max-w-md px-5 py-3 rounded-full shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full font-medium transition shadow-sm duration-300 ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white text-gray-800 border border-gray-300 hover:bg-orange-100"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredItems.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => (itemsRef.current[i] = el)}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.03]"
            >
              <div className="overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-orange-500 font-bold mt-1">{item.price}</p>
                <button className="mt-4 flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 transition-all text-white py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02]">
                  <FiShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No items found.</p>
        )}
      </div>
    </section>
  );
}
