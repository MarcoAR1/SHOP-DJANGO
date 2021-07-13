import React, { useEffect, useState } from 'react'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import { getProduct } from './services/products'

function App() {
  const [Product, setProduct] = useState([])

  useEffect(() => {
    getProduct()
      .then((res) => res.json())
      .then((res) => {
        if (typeof res === 'object') {
          for (let x in res) {
            res[x].image = JSON.parse(res[x].image)
          }
        }
        setProduct(res)
      })
  }, [])

  return (
    <div className="app">
      <NavBar />
      <HomePage Product={Product} />
    </div>
  )
}

export default App
