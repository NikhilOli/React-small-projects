import { useEffect, useState } from "react";

const Home = ({setProduct}) => {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const apiUrl = 'https://dummyjson.com/products';
        const response = await fetch(apiUrl);
        const data = await response.json();
        const productsArray = data.products;
        setProducts(productsArray)
    }
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <div className="container mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
    );
};

export default Home;