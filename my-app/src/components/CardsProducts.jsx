import React from 'react'
import { Card, Button } from 'react-bootstrap'
const CardsProducts = ({ name, description,img }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  )
}

export default CardsProducts
