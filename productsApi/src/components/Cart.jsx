import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'

const Cart = () => {
const {cart, setCart} = useContext(ProductContext)
    return (
        <div>This is a cart section</div>
    )
}

export default Cart