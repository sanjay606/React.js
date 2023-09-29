import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import REACTLOGO from './images/learn.png'

// import  { useState } from 'react';
// import { add } from './redux/features/cartSlice';
import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';

const Nave = () => {
  const cartItems = useSelector((state) => state.cart);
  const total = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar expand="lg" className="body">
      <Container className="con">
       
         <img src={REACTLOGO}/>
       
        <Navbar.Collapse className="na">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">All Courses</Nav.Link>
            <Nav.Link href="#Page">Team</Nav.Link>
            <Nav.Link href="#News">About</Nav.Link>

            <Nav.Link href="#Contact Us">Contact Us</Nav.Link>

            <div className="shop-1">
              <Link to="/cart">
                <ShoppingCartIcon  fontSize="large"  color="primary" />
                <Badge bg="secondary">{total}</Badge>
              </Link>
              </div>
              
              <div className="src">
              <SearchIcon  fontSize="large"  />
              </div>
              <div><Link to="/CircleIcon" className="login"><AccountCircleIcon  fontSize="large"  color="black"/></Link>
              </div>
              </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nave;
