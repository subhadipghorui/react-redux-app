import React from 'react'
import { useSelector } from 'react-redux'
import { getItemsSelector } from '../redux/slices/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
    // const items = useSelector(state => state)
    const items = useSelector(getItemsSelector)
    console.log(items)
  return (
    <div>
        <p>Cart Items: {items.length}</p>
        <p><Link to="/cart-items">View all</Link></p>
    </div>
  )
}

export default Cart