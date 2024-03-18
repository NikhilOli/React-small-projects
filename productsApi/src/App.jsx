import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import ProductContext from './context/ProductContext';
import Cart from './components/Cart';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([])
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(cart);
  }
  function getCount() {
    setCartCount(cart.length);
  }
  return (
    <>
      <ProductContext.Provider value={{ cart, setCart, addToCart, cartCount, getCount }}>
        <BrowserRouter>
          <Navbar setSearchQuery={setSearchQuery} />
          <Routes>
            <Route path='/' element={<Home products={products} searchQuery={searchQuery} />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
    </>
  )
}


export default App