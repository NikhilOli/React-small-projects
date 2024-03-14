import React, { useEffect, useState } from 'react'


const App = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const apiUrl = 'https://dummyjson.com/products';
    const response = await fetch(apiUrl);
    const data = await response.json();
    const productsArray = data.products;
    setProducts(productsArray)
    console.log(productsArray[0].title);
  }
  useEffect(() => {
    getProducts();
  }, [])

  const Navbar = ({ setProducts }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = async () => {
      const apiUrl = `https://dummyjson.com/products/search?q=${searchQuery}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      const productsArray = data.products;
      setProducts(productsArray);
    };
    useEffect(() => {
      handleSearch();
    }, [searchQuery])



    return (
      <div className="bg-[#F4EEFF] py-6">
        <div className='container md:mx-4 justify-around flex md:justify-evenly items-center'>
          <h1 className="text-2xl font-semibold text-[#616ea4] cursor-pointer">ProductsAny</h1>
          <div className="flex items-center space-x-4">
            <input

              type="search"
              name="search"
              placeholder='Search Here...'
              id="search"
              className="border w-[40vw] border-[#DCD6F7] rounded px-3 py-1 focus:outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch} className="bg-[#A6B1E1] text-black  px-4 py-1 rounded">Search</button>
          </div>
          <ul className="hidden md:flex space-x-4">
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
      <div className="container mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {if (searchQuery) {
          {
            products.map(({ id, thumbnail, description, title, price }) => (
              <div key={id} className="bg-white p-4 rounded-md shadow-md md:w-[24vw] w-[70vw]  mx-auto max-h-max">
                <img src={thumbnail} alt={title} className="mb-4 rounded-md max-h-40 w-full	" />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">{title}</span>
                  <p className="text-gray-600">{description}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-lg font-semibold text-[#424874]">Price: ${price}</p>
                  <button className="bg-[#A6B1E1] text-black px-4 py-1 rounded">Buy Now</button>
                </div>
              </div>
            ))
          }
        } else {

          {
            products.map(({ id, thumbnail, description, title, price }) => (
              <div key={id} className="bg-white p-4 rounded-md shadow-md md:w-[24vw] w-[70vw]  mx-auto max-h-max">
                <img src={thumbnail} alt={title} className="mb-4 rounded-md max-h-40 w-full	" />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">{title}</span>
                  <p className="text-gray-600">{description}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-lg font-semibold text-[#424874]">Price: ${price}</p>
                  <button className="bg-[#A6B1E1] text-black px-4 py-1 rounded">Buy Now</button>
                </div>
              </div>
            ))
          }
        }}
      </div>
    );
  };



  return (
    <div>
      <Navbar setProducts={setProducts} />
      <Home />
    </div>
  )
}


export default App