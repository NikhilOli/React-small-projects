import { useEffect, useState, useContext } from "react";
import { BeatLoader } from "react-spinners";
import ProductContext from '../context/ProductContext'
import { Toaster, toast } from 'sonner'


const Home = ({ searchQuery }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart, getCount } = useContext(ProductContext)
    useEffect(() => {
        const getProducts = async () => {
            let apiUrl = 'https://dummyjson.com/products';
            if (searchQuery) {
                apiUrl = `https://dummyjson.com/products/search?q=${searchQuery}`;
            }
            const response = await fetch(apiUrl);
            const data = await response.json();
            const productsArray = data.products;
            setFilteredProducts(productsArray);
            setLoading(false);
        };

        getProducts();
    }, [searchQuery]);
    useEffect(() => {
        getCount();
    }, [getCount]);
    return (
        <>
            <Toaster position="bottom-right" richColors />
            <div className="container mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {loading && (
                    <div className="flex justify-center items-center w-screen h-screen border-2" style={{ marginTop: "-20vh" }}>
                        <BeatLoader color="#142930" />
                    </div>
                )}
                {filteredProducts.length === 0 && !loading && (
                    <div className="text-black flex items-center justify-center w-screen  text-2xl font-bold">No Results found..</div>
                )}
                {
                    filteredProducts.map(({ id, thumbnail, description, title, price }) => (
                        <div key={id} className="bg-white p-4 rounded-md shadow-md md:w-[24vw] w-[70vw] mx-auto max-h-max hover:scale-105 duration-150 cursor-pointer">
                            <img src={thumbnail} alt={title} className="mb-4 rounded-md max-h-40 w-full" />
                            <div className="flex flex-col">
                                <span className="text-lg font-semibold">{title}</span>
                                <p className="text-gray-600">{description}</p>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <p className="text-lg font-semibold text-[#424874]">Price: ${price}</p>

                                <button onClick={() => { addToCart({ id, thumbnail, description, title, price }); getCount(); toast.success('Item added successfully'); }} className="bg-[#A6B1E1] text-black font-bold px-4 py-1 rounded hover:bg-[#7881aa] hover:text-white">Add to Cart </button>

                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    );
};

export default Home;
