import React from 'react';
import PrimeImage from './PrimeImage';
import PrimeNavBar from './PrimeNavBar';
import PrimeFooter from './PrimeFooter';

const Home = () => {
  return (
    <div> 
    <header className='Nav'><PrimeNavBar/></header>
    <div><PrimeImage/></div>
    <PrimeFooter/>
   </div> 
  )
}

export default Home