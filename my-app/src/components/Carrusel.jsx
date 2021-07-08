import React from 'react'
import { Carousel } from 'react-bootstrap'
const Carrusel = ({ Product }) => {
  return (
    <Carousel>
      {Product.map((product) => {
        return (
          <Carousel.Item key={product.id}>
            <img
              style={{ maxWidth: 300, maxHeight: 300 }}
              className="d-block w-100"
              src={product.image}
              alt={product.name}
            />
            <Carousel.Caption>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default Carrusel
