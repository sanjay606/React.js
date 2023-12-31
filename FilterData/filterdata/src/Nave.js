import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import { add } from './redux/features/cartSlice';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';


const Nave = () => {

  const cartItems = useSelector((state) => state.cart);
  const total = cartItems.reduce((total,item)=>total+item.quantity,0);
  
  return (
    <Navbar expand="lg" className="body">
      <Container className='con'>
        <Navbar.Brand className='logo' href="#home">Zomato</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='na'>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Page">Page</Nav.Link>
            <Nav.Link href="#News">News</Nav.Link>
            <Nav.Link href="#Contact Us">Contact Us</Nav.Link>
            <Nav.Link href="#Order">Order</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <div className='shop-1'><Link to="/cart"><ShoppingCartIcon/><Badge bg="secondary">{total}</Badge></Link></div>
            
            <div className='src'><SearchIcon/></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nave ;