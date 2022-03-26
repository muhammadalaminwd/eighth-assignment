import React from 'react';
import './Cart.css'

const Cart = ({product}) => {
    const {name, img} = product
    console.log(product)
    return (
        <div className='cart-div'>
            <img className='image' src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Cart;