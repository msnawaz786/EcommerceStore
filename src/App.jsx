import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import Product from './components/Product'
import Cart from './components/Cart'

export default function App() {
  return (
    <div>
 
 <Router>
 <Navbar />
  <Routes>
    <Route path='/' element={<Product />}/>
    <Route path='/cart' element={<Cart />}/>
  </Routes>
 </Router>
    </div>
  )
}
