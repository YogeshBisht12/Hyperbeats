import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [method, setMethod] = useState('card');
  const [upiId, setUpiId] = useState('');

  const handlePayment = () => {
    if (method === 'upi' && !upiId) {
      alert('Please enter your UPI ID.');
      return;
    }
  
    // Simulate payment success
    alert('Payment successful!');
  
    // Redirect to track order page with info
    navigate('/track-order', {
      state: {
        orderId: 'ORD123456', // Replace with dynamic ID logic if needed
        name: state?.deliveryInfo?.fullName || 'Guest',
        address: state?.deliveryInfo?.address || '',
      },
    });
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">💳 Payment</h2>

        {/* Tabs for payment method */}
        <div className="flex mb-6">
          {['card', 'upi'].map((m) => (
            <button
              key={m}
              onClick={() => setMethod(m)}
              className={`flex-1 py-2 text-sm font-semibold border-b-2 ${
                method === m
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-orange-500'
              }`}
            >
              {m === 'card' ? 'Card Payment' : 'UPI Payment'}
            </button>
          ))}
        </div>

        <div className="text-sm text-gray-600 mb-4">
          <p><strong>Name:</strong> {state?.deliveryInfo?.fullName || '-'}</p>
          <p><strong>Address:</strong> {state?.deliveryInfo?.address || '-'}</p>
        </div>

        {method === 'card' ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                <input
                  type="password"
                  placeholder="•••"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
            <input
              type="text"
              placeholder="example@upi"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        )}

        <button
          onClick={handlePayment}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition duration-200 shadow-md mt-6"
        >
          {method === 'card' ? 'Pay Now' : 'Pay via UPI'}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
