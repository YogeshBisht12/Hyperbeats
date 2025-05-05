import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert('Please fill all required fields.');
      return;
    }
    navigate('/payment', { state: { deliveryInfo: formData } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-white px-4">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-10 border border-orange-200">
        <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-8">
          🧾 Checkout Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FloatingInput label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required />
            <FloatingInput label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
            <FloatingInput label="Email" name="email" value={formData.email} onChange={handleChange} />
            <FloatingInput label="City" name="city" value={formData.city} onChange={handleChange} />
            <FloatingInput label="State" name="state" value={formData.state} onChange={handleChange} />
            <FloatingInput label="ZIP Code" name="zip" value={formData.zip} onChange={handleChange} />
          </div>

          <div className="relative">
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="4"
              placeholder=" "
              required
              className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-focus:text-orange-500 peer-focus:text-xs peer-focus:-top-1 peer-focus:left-3 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm">
              Delivery Address
            </label>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-3 px-8 rounded-xl shadow-lg transition duration-300"
            >
              Continue to Payment →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const FloatingInput = ({ label, name, value, onChange, required }) => (
  <div className="relative">
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder=" "
      className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
    />
    <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-focus:text-orange-500 peer-focus:text-xs peer-focus:-top-1 peer-focus:left-3 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm">
      {label}
    </label>
  </div>
);

export default CheckoutPage;
