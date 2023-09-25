// import logo from './logo.svg';
import './App.css';
// import './PrimeImg.css';
// import PrimeImage from './PrimeImage';
// import PrimeNavBar from './PrimeNavBar';
// import PrimeFooter from './PrimeFooter';

// import { Router } from '@material-ui/icons';
// import { Route } from '@mui/icons-material';
import './PrimeImg.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrimeLoginPage from './Pages/PrimeLoginPage';
import Error from './Pages/Error';

function App() {
  return (
    <BrowserRouter>
    
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Sign in to join prime" element={<PrimeLoginPage/>} />
      <Route path="/*" element={<Error/>} />
      </Routes>
  
    
  </BrowserRouter>

 
  )
}

export default App;
