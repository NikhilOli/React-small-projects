import { useState, useEffect } from "react";
const Navbar = ({ setProduct }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const getSearchedProduct = async () => {
        const apiUrl = `https://dummyjson.com/products/search?q=${searchQuery}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const productsArray = data.products;
        setProduct(productsArray);
    };
    const handleSearch = () => {
        getSearchedProduct();
    }
    useEffect(() => {
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
export default Navbar;