import React from 'react';
import { useCart } from './CartContext';
import { FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext'; // ✅ Import useAuth hook

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const { user } = useAuth(); // ✅ Get user from AuthContext
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const handleCheckout = () => {
    if (!user) {
      navigate('/login'); // If not logged in, redirect to login
    } else {
      navigate('/checkout'); // ✅ Redirect to the actual checkout page
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">🛒 Your cart is currently empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-500">₹{item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <FiTrash2 className="text-xl" />
                </button>
              </div>
            ))}
          </div>

          {/* Total & Checkout */}
          <div className="mt-8 border-t pt-4 flex justify-between items-center">
            <h3 className="text-xl font-semibold">Total:</h3>
            <span className="text-2xl font-bold text-orange-600">₹{total}</span>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleCheckout}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow-md transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
