import React, { useContext, useState, useEffect } from 'react'
import ProductContext from '../context/ProductContext'
import { Toaster, toast } from 'sonner'

const Cart = () => {
    const { cart, setCart, getCount } = useContext(ProductContext)
    const [cartCount, setCartCount] = useState(0);
    function removeCart(itemId) {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    }
    useEffect(
        () => {
            getCount();
        }
    )
    return (
        <>
        <Toaster position="bottom-right" richColors />
        <div className="container mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {
                cart.map(({ id, thumbnail, description, title, price }) => (
                    <div key={id} className="bg-white p-4 rounded-md shadow-md md:w-[24vw] w-[70vw] mx-auto max-h-max hover:scale-105 duration-150 cursor-pointer">
                        <img src={thumbnail} alt={title} className="mb-4 rounded-md max-h-40 w-full" />
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold">{title}</span>
                            <p className="text-gray-600">{description}</p>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <p className="text-lg font-semibold text-[#424874]">Price: ${price}</p>
                            <button onClick={() => { removeCart(id); toast.error('Item deleted successfully'); }} className="bg-[#A6B1E1] text-black font-bold px-4 py-1 rounded hover:bg-[#7881aa] hover:text-white">Remove from Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
            </>
    )
}

export default Cart
