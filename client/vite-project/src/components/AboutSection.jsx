import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaTruck, FaClipboardCheck } from 'react-icons/fa';

const tabs = ['Frequent Questions', 'Who we are?', 'Partner Program', 'Help & Support'];

const AboutSection = () => {
return (
    <div className="bg-gray-100 py-16 px-4">
      {/* Header and Tabs */}
    <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
    >
        <h2 className="text-3xl font-extrabold mb-6">Know more about us!</h2>
        <div className="flex flex-wrap justify-center gap-4">
        {tabs.map((tab, index) => (
            <motion.button
            key={tab}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                index === 0
                ? 'bg-black text-white shadow-lg'
                : 'text-gray-700 border-gray-300 hover:bg-gray-200'
            }`}
            >
            {tab}
            </motion.button>
        ))}
        </div>
    </motion.div>

    <motion.div
        className="bg-white rounded-lg shadow-md p-6 md:p-10 grid grid-cols-1 md:grid-cols-5 gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
    >
        <div className="col-span-2 space-y-4 text-sm md:text-base">
        <div className="bg-orange-500 text-white py-2 px-4 rounded-full font-semibold w-fit animate-bounce">
            How does Hypereats work?
        </div>
        <ul className="text-gray-700 space-y-2">
            <li>What payment methods are accepted?</li>
            <li>Can I track my order in real-time?</li>
            <li>Are there any special discounts or promotions available?</li>
            <li>Is Hypereats available in my area?</li>
        </ul>
        </div>

        <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {[{
            icon: <FaUtensils className="text-3xl text-yellow-500 mx-auto mb-2" />,
            title: 'Place an Order!',
            desc: 'Place order through our website or Mobile app',
        }, {
            icon: <FaClipboardCheck className="text-3xl text-orange-500 mx-auto mb-2" />,
            title: 'Track Progress',
            desc: 'You can track your order status with delivery time',
        }, {
            icon: <FaTruck className="text-3xl text-green-600 mx-auto mb-2" />,
            title: 'Get your Order!',
            desc: 'Receive your order at a lightning-fast speed!',
        }].map((item, i) => (
            <motion.div
            key={i}
            className="bg-gray-300 rounded-lg p-4 hover:shadow-xl transition"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            >
            {item.icon}
            <h4 className="font-bold">{item.title}</h4>
            <p className="text-sm">{item.desc}</p>
            </motion.div>
        ))}
        </div>
    </motion.div>

      {/* Description */}
    <motion.p
        className="text-center text-sm text-gray-600 max-w-4xl mx-auto mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
    >
    Hypereats simplifies the food ordering process. Browse through our diverse menu, select your
        favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your
        doorstep in no time!
    </motion.p>

    <motion.div
        className="bg-orange-500 text-white mt-16 py-6 px-4 grid grid-cols-2 md:grid-cols-4 text-center gap-6 rounded-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
    >
        <div>
        <p className="text-2xl font-extrabold">546+</p>
        <p className="text-sm">Registered Riders</p>
        </div>
        <div>
        <p className="text-2xl font-extrabold">789,900+</p>
        <p className="text-sm">Orders Delivered</p>
        </div>
        <div>
        <p className="text-2xl font-extrabold">690+</p>
        <p className="text-sm">Restaurants Partnered</p>
        </div>
        <div>
        <p className="text-2xl font-extrabold">17,457+</p>
        <p className="text-sm">Food Items</p>
        </div>
    </motion.div>
    </div>
);
};

export default AboutSection;
