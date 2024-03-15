import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);

  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery} />
      <Home products={products} searchQuery={searchQuery} />
    </div>
  )
}


export default App