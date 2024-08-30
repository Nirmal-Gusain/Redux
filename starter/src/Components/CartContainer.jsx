import React from 'react'
import { useSelector } from 'react-redux'
import cartItem from './cartItem'

function CartContainer() {
    const {cartItems} = useSelector((state)=> state.cart)
    console.log(cartItems)
  return (
    <div>{cartItems.map((items)=>{
        return <cartItem/>
    })}</div>
  )
}

export default CartContainer