import { useState,useEffect } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularDishesSection from './components/PopularDishesSection';
import PopularCategoriesSection from './components/PopularCategoriesSection';
import PopularRestaurantsSection from './components/PopularRestaurantsSection';



function App() {
  const [message, setMessage] = useState('');

useEffect(() => {
    fetch('http://localhost:5000/api/test')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar/>
      <Hero/>
      <PopularDishesSection/>
      <PopularCategoriesSection/>
      <PopularRestaurantsSection/>
    </>
  )
}

export default App
