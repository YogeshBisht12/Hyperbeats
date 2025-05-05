import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularDishesSection from './components/PopularDishesSection';
import PopularCategoriesSection from './components/PopularCategoriesSection';
import PopularRestaurantsSection from './components/PopularRestaurantsSection';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Banner from './components/banner';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import BrowseMenu from './pages/BrowseMenu';
import SpecialOffers from './pages/SpecialOffers';
import Restaurants from './pages/Restaurants';
import Cart from './pages/Cart';
import { CartProvider } from './pages/CartContext';
import { AuthProvider } from './components/AuthContext'; // ✅ Import AuthProvider
import CheckoutPage from './pages/Checkout';
import PaymentPage from './pages/PaymentPage';
import TrackOrderPage from './pages/TrackOrder';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/test')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <AuthProvider> {/* ✅ Wrap in AuthProvider */}
      <CartProvider> {/* ✅ Nested CartProvider inside AuthProvider */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <PopularDishesSection />
                <PopularCategoriesSection />
                <PopularRestaurantsSection />
                <Banner />
                <AboutSection />
                <Footer />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/menu" element={<BrowseMenu />} />
            <Route path="/offers" element={<SpecialOffers />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/track-order" element={<TrackOrderPage />} />

          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
