import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const PrimeNavBar = () => {
  return (
    <header>
    <div ><img className='logo' src='https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png'></img>
    </div>
    <div className="navbar">
    <li ><a href='#'></a>Home</li>
    <li ><a href='#'></a>Store</li>
    <li ><a href='#'></a>Live TV</li>
    <li ><a href='#'></a>Catagories</li>
   <div  className='search-1'> <h2><SearchIcon fontSize="large"/></h2></div>
   <div className='try'>
    <li ><a href='#'></a>Try for free</li>
    </div>
   <div className='en'> <li ><a href='#'></a>EN</li></div>
   <div><AccountCircleIcon className='logo-2' color="primary"  sx={{ fontSize: 32 }}/>
   </div>
   
   
   </div>

    </header>
  )
}

export default PrimeNavBar