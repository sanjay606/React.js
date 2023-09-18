import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function CardItems({ activeCategory, items }) {
  return (
    <div className='head'>
  
      {/* Render items based on the active category */}
      {items.map((item) => (
        <div key={`${item.id}-${activeCategory}`}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.imgsrc} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
              <Button  variant="primary">{item.btn}</Button>
              
            </Card.Body>
          </Card>
         
          </div>
      ))}
      </div>
     
  );
}

export default CardItems;
