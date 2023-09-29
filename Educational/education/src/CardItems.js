//cardItems
import React from "react";
import Button from "react-bootstrap/Button";
// import data from "../data";
import Card from "react-bootstrap/Card";
import { add, remove } from "./redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "@material-ui/core";
import { Link } from "react-router-dom";
// import Allcard from "./utils/Allcard";

function CardItems({ activeCategory, items }) {
  const cartItems = useSelector((state) => state.cart);
  
const getTotalQuantity=(Productid)=>{
  const cardItem= cartItems.find((item) => item.id === Productid);
  return cardItem?cardItem.quantity:0;
};

  const dispatch = useDispatch();

  // const addtoCart = (item) => {
  //   dispatch(add(item));
  // };

  // const removeFromCart = (itemId) => {
  //   dispatch(remove(itemId));
  // };
  

  return (
    <>

      {/* <h1>Products</h1>
      // <Link to="/cart">Cart</Link>*/}
      <div className="cr">
        {items.map((item) => (
          <div key={`${item.id}-${activeCategory}`}>
            <Card style={{ width: "18rem" }} className="hei">
            <Link to={`/Allcard/${item.id}`}>
              <Card.Img variant="top" src={item.imgsrc} className="imgg" />
              </Link>
              <Card.Body className="bttt">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
               
               

              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
export default CardItems;
