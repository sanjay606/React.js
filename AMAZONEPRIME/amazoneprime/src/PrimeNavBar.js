import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
// import HomeOption from './HomeOption';

const PrimeNavBar = () => {
  return (
    <header>
    <div ><img className='logo' src='https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png'></img>
    </div>
    <div className="navbar">
    <li ><Link to='/home'>Home</Link></li>
    <li ><Link to='/Store'>Store</Link></li>
    <li ><Link to='/Live TV'>Live TV</Link></li>
    <li ><Link to='/Catagories'>Catagories</Link></li>
   <div  className='search-1'> <h2><SearchIcon fontSize="large"/></h2></div>
   <div className='try'>
    <li ><Link to='/Try for free'>Try for free</Link></li>
    </div>
   <div className='en'> <li ><Link to='/EN'>EN</Link></li></div>
   <div><AccountCircleIcon className='logo-2' color="primary"  sx={{ fontSize: 32 }}/>
   </div>
   
   
   </div>

    </header>
  )
}

export default PrimeNavBar