import React from 'react'
import CardsProducts from './CardsProducts'
import Carrusel from './Carrusel'

const HomePage = ({ Product }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <Carrusel Product={Product} />
      </div>

      <div
        style={{
          boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '70%',
          margin: '0 auto',
          
        }}
      >
        {Product.map((Product) => {
          return (
            <CardsProducts
              name={Product.name}
              description={Product.description}
              img={Product.image}
            />
          )
        })}
      </div>
    </>
  )
}

export default HomePage
