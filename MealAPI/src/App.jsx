import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import { useState } from 'react'

const App = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (input) => {
    setSearchInput(input);
  };
  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Hero searchInput={searchInput} />
    </div>
  )
}

export default App