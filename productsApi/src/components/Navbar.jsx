import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../context/ProductContext";

const Navbar = ({ setSearchQuery }) => {
    const { cartCount } = useContext(ProductContext);
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = () => {
        setSearchQuery(searchInput);
        setSearchInput('');
    };

    const handleHomeClick = () => {
        setSearchQuery('');
        setSearchInput('');
    };

    const fontSize = cartCount > 9 ? 'text-xs' : 'text-sm';

    return (
        <div className="bg-[#F4EEFF] py-6">
            <div className='container md:mx-4 justify-around flex md:justify-evenly items-center'>
                <h1 className="text-2xl font-semibold text-[#616ea4] cursor-pointer">ProductsAny</h1>
                <div className="flex items-center space-x-4">
                    <input
                        type="search"
                        name="search"
                        placeholder='Search Here...'
                        className="border w-[40vw] border-[#DCD6F7] rounded px-3 py-1 focus:outline-none"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button onClick={handleSearch} className="bg-[#A6B1E1] text-black  px-4 py-1 rounded">Search</button>
                </div>
                <ul className="hidden md:flex space-x-4">
                    <Link to='/' onClick={handleHomeClick} className="text-[#424874]  cursor-pointer text-xl hover:text-[#a9afe1]">Home</Link>
                    <Link to='/about' className="text-[#424874] cursor-pointer text-xl hover:text-[#9b9fc2]">About</Link>
                    <Link to='/contact' className="text-[#424874] cursor-pointer text-xl hover:text-[#9a9fc6]">Contact</Link>
                    <Link to='/cart' className="text-[#424874] cursor-pointer text-xl relative hover:text-[#9a9fc6]">Cart
                        {cartCount > 0 && (
                            <span style={{ borderRadius: '50%' }} className={`absolute bg-green-400 rounded-full px-[10px] py-1  ${fontSize} -top-2 -right-6 font-bold text-white`}>{cartCount}</span>
                        )}
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
