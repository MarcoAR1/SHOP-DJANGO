import { useEffect, useState } from 'react'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import { getProduct } from './services/products'


function App() {
  const [Product, setProduct] = useState([])

  useEffect(() => {
    getProduct()
      .then((res) => res.json())
      .then((res) => setProduct(res))
  }, [])
  return (
    <div className='app'>
      <NavBar />
      <HomePage Product={Product} />
    </div>
  )
}

export default App
