import React, { useRef } from 'react'
import CardsProducts from './CardsProducts'
import Carousel from './Carousel'
import ContainerAllProducts from './ContainerAllProducts'

const HomePage = ({ Product }) => {
  const CarouselRef = useRef()

  const handleDesactiveAutoMove = () => {
    CarouselRef.current.handleDesactiveAutoMove()
  }
  const handleActiveAutoMove = () => {
    CarouselRef.current.handleActiveAutoMove()
  }

  return (
    <>
      <Carousel ProductLength={Product.length} ref={CarouselRef}>
        {[...Product].splice(0, 20).map((product) => (
          <CardsProducts
            key={product.id}
            name={product.name}
            amount={product.amount}
            img={product.image}
            onMouseOver={handleDesactiveAutoMove}
            onMouseOut={handleActiveAutoMove}
          />
        ))}
      </Carousel>
      <ContainerAllProducts Product={Product} />
    </>
  )
}

export default HomePage
