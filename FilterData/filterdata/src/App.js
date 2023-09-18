import React, { useState } from 'react'

import "./App.css";
import CardItems from './CardItems';
import Allcard from './utils/Allcard';
import MainImg from './MainImg';
import Nave from './Nave';
import NewImg from './NewImg';
import Footerlo from './Footerlo';
import ImgNewOne from './ImgNewOne';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Filter items based on the active category
  const filteredItems = Allcard.filter((item) => {
    if (activeCategory === 'all') {
      return true; // Show all items
    }
    return item.category === activeCategory;
  });

  return (
    <div className='btn'>
    <Nave/>
    <div className='main-1'><MainImg/></div>
      {/* Add buttons to select categories */}
      <div className='btn-1'>
        <button onClick={() => handleCategoryChange('all')}>Show All</button>
        <button onClick={() => handleCategoryChange('lunch')}>Show Lunch</button>
        <button onClick={() => handleCategoryChange('breakfast')}>Show Breakfast</button>
        <button onClick={() => handleCategoryChange('dinner')}>Show Dinner</button>
      </div>

      {/* Render the CardItems component */}
      <CardItems activeCategory={activeCategory} items={filteredItems} />
      <NewImg/>
      <ImgNewOne/>
      <Footerlo/>
      </div>
       
  );
}

export default App;