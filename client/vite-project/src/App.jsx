import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularDishesSection from './components/PopularDishesSection';
import PopularCategoriesSection from './components/PopularCategoriesSection';
import PopularRestaurantsSection from './components/PopularRestaurantsSection';
import Login from './pages/Login';  // ✅
import Signup from './pages/Signup'; // ✅
import Banner from './components/banner';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/test')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <PopularDishesSection />
            <PopularCategoriesSection />
            <PopularRestaurantsSection />
            <Banner/>
            <AboutSection/>
            <Footer/>
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* ✅ Signup route */}
      </Routes>
    </Router>
    
    
  );
}

export default App;
