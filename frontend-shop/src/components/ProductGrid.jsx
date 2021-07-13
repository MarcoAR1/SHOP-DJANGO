import React from 'react'
import CardsProducts from './CardsProducts'
const ProductGrid = ({ Product }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
      }}
    >
      {Product.map((Product) => {
        return (
          <CardsProducts
            style={{ marginTop: 20 }}
            key={Product.id}
            name={Product.name}
            description={Product.description}
            img={Product.image}
            amount={Product.amount}
          />
        )
      })}
    </div>
  )
}

export default ProductGrid
