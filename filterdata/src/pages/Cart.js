//cart
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/features/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <div className="cr">
        {cartItems.map((item) => (
          <div key={`${item.id}`}>
            <Card style={{ width: "18rem" }} className="hei">
              <Card.Img variant="top" src={item.imgsrc} className="imgg" />
              <Card.Body className="bttt">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <div className="card-read">Read {item.quantity}</div>
                <Button onClick={() => addToCart(item)}>{item.btn}</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
};

export default Cart;