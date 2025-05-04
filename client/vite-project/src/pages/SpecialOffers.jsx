import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const offers = [
  {
    id: 1,
    title: "50% Off on First Order",
    description: "Enjoy half price on your first food order. Limited time only!",
    image: "/src/assets/images/offer2.jpg",
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free Pizza",
    description: "Order any medium pizza and get another one absolutely free.",
    image: "/src/assets/images/offer1.jpg",
  },
  {
    id: 3,
    title: "Free Dessert on Orders Above ₹500",
    description: "Sweeten your meal with a complimentary dessert.",
    image: "/src/assets/images/offer3.jpg",
  },
];

export default function SpecialOffers() {
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
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6 bg-gradient-to-br from-orange-100 via-white to-orange-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Special Offers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
