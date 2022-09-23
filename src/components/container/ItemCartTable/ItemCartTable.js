import React from 'react'
import { useContext } from 'react'

import { CartContext } from '../../../context/CartContext'
import { ItemCart } from '../../single/ItemCart/ItemCart'

import './ItemCartTable.css'

export default function ItemCartTable() {
    const {products, numberOfProducts, getTotalPrice} = useContext(CartContext)
  
    return (
    <div className='cartTable'>
        <div className='tableBody'>
            {
                products.map((product, index) => <ItemCart key={index} item={product} />)
            }
        </div>
    </div>
  )
}