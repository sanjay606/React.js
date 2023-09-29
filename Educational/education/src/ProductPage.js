//cardItems
import React from "react";
import Button from "react-bootstrap/Button";
// import data from "../data";
import Card from "react-bootstrap/Card";
import { add, remove } from "./redux/features/cartSlice";
import { useDispatch } from "react-redux";
import Allcard from "./utils/Allcard";
// import { Link } from "react-router-dom";
// import Allcard from "./utils/Allcard";
import { useParams } from "react-router-dom";

function ProductPage() {
    // const cartItems = useSelector((state) => state.cart);
    // const getTotalQuantity=(Productid)=>{
    //     const cardItem= cartItems.find((item) => item.id === Productid);
    //     return cardItem?cardItem.quantity:0;
    //   };

    const {id} = useParams();
  const Products = Allcard.find((Products)=> Products.id === id);
  

  const dispatch = useDispatch();

  if(!Products){
    return <div>Products not find</div>
  }


  const addtoCart = (Products) => {
    dispatch(add(Products));
  };

  const removeFromCart = (ProductsId) => {
    dispatch(remove(Products.id));
  };
  

  return (
    <>
    <div className="hei">
   
    <div key={`${Products.id}`}>
          <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={Products.imgsrc}  className='imgg'/>
            <Card.Body className='bttt'>
              <Card.Title>{Products.title}</Card.Title>
              <Card.Text>{Products.desc}</Card.Text>
              
              <Button onClick={()=>addtoCart(Products)}>{Products.btn}</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button onClick={()=>removeFromCart(Products.id)}>{Products.btn1}</Button>
            </Card.Body>
          </Card>
        </div>
        </div>
       
       </> 
      )
}
export default ProductPage;
