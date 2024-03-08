import React, { useState } from 'react';

const Navbar = ({ onSearch }) => {
    const [input, setInput] = useState("");
    const handleInput = (e) => {
        const inputValue = e.target.value;
        setInput(inputValue);
        onSearch(inputValue);
    }
    const handleSearch = () => {
        onSearch(input);
        setInput("");
    }
    return (
        <nav className="bg-gradient-to-r from-slate-500 to-gray-500 text-white py-4">
            <div className="container flex justify-between items-center">
                <div className="flex items-center">
                    <div className="text-3xl font-extrabold pl-10 text-white">Meal_Online</div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="relative">
                        <input
                            onChange={handleInput}
                            type="text"
                            placeholder="Search"
                            className="py-1 px-3 border border-white rounded-md bg-transparent text-white focus:outline-none focus:border-blue-500 transition"
                        />
                        <button onClick={handleSearch} className="absolute right-0 top-0 mt-2 mr-2">
                            {/* Add your search icon or button icon here */}
                            {/* Example: <i className="fas fa-search text-white"></i> */}
                            Search
                        </button>
                    </div>
                    <NavItem title="Home" />
                    <NavItem title="About" />
                    <NavItem title="Contact" />
                </div>
            </div>
        </nav>
    );
};

const NavItem = ({ title }) => {
    return (
        <div className="group pr-20 cursor-pointer hover:text-[#dcdcdc]">
            <div className="text-base font-semibold">{title}</div>
        </div>
    );
};

export default Navbar;
