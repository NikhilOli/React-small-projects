import React from 'react'
const Navbar = () => {
  return (
    <div className="bg-[#F4EEFF] py-6">
      <div className='container mx-4 flex justify-evenly items-center'>
        <h1 className="text-2xl font-semibold text-[#616ea4]">ProductsAny</h1>
        <div className="flex items-center space-x-4">
          <input
            type="search"
            name="search"
            placeholder='Search Here...'
            id="search"
            className="border w-[40vw] border-[#DCD6F7] rounded px-3 py-1 focus:outline-none"
          />
          <button className="bg-[#A6B1E1] text-black  px-4 py-1 rounded">Search</button>
        </div>
        <ul className="flex space-x-4">
          <li className="text-[#424874] cursor-pointer hover:text-[#a9afe1]">Home</li>
          <li className="text-[#424874] cursor-pointer hover:text-[#9b9fc2]">About</li>
          <li className="text-[#424874] cursor-pointer hover:text-[#9a9fc6]">Contact</li>
        </ul>
      </div>
    </div>
  )
}


const Home = () => {
  return (
    <div>
      <div>
        Home
      </div>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App