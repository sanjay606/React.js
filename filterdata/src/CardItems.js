//cardItems
import React from "react";
import Button from "react-bootstrap/Button";
// import data from "../data";
import Card from "react-bootstrap/Card";
import { add, remove } from "./redux/features/cartSlice";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import Allcard from "./utils/Allcard";

function CardItems({ activeCategory, items }) {
  const dispatch = useDispatch();

  const addtoCart = (item) => {
    dispatch(add(item));
  };

  const removeFromCart = (itemId) => {
    dispatch(remove(itemId));
  };

  return (
    <>
      {/* <h1>Products</h1>
      // <Link to="/cart">Cart</Link>*/}
      <div className="cr">
        {items.map((item) => (
          <div key={`${item.id}-${activeCategory}`}>
            <Card style={{ width: "18rem" }} className="hei">
              <Card.Img variant="top" src={item.imgsrc} className="imgg" />
              <Card.Body className="bttt">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <div className="card-read">Read{item.quantity}</div>
                <Button className="green" onClick={() => addtoCart(item)}>
                  {item.btn}
                </Button>
               &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Button onClick={() => removeFromCart(item.id)}>
                  {item.btn1}
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
export default CardItems;
