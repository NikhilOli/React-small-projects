import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';


const App = () => {
  const [product, setProduct] = useState('');

  console.log(product);


  return (
    <div>
      <Navbar product={setProduct} />
      <Home product={setProduct} />
    </div>
  )
}


export default App