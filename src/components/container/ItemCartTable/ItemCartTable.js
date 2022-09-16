import React from 'react'
import { useContext } from 'react'

import { CartContext } from '../../../context/CartContext'
import { ItemCart } from '../../single/ItemCart/ItemCart'

import './ItemCartTable.css'

export default function ItemCartTable() {
    const {products, numberOfProducts, getTotalPrice} = useContext(CartContext)
  
    return (
    <div className='cartTable'>
        <div className='tableRow'>
            <p>Item details</p>
            <p>Quantity</p>
            <p>Unit price</p>
            <p>Total price</p>
        </div>
        <div className='tableBody'>
            {
                products.map((product, index) => <ItemCart key={index} item={product} />)
            }
        </div>
        <div className='tableRow'>
            <p>Total</p>   
            <p>{numberOfProducts()}</p>
            <p></p>
            <p>$ {getTotalPrice()}</p>
        </div>
    </div>
  )
}