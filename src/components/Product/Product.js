import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product, handleAddToCartbtn}) => {
        const {name, img, category, seller, price, ratings, stock, shipping, ratingsCount} = product
    return (
        <div className='product'>
        <img src={img} alt="" />
        <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <p><small>Seller: {seller}</small></p>
        <p><small>Stock: {stock}</small></p>
        <p><small>Shipping: {shipping}</small></p>
        <p><small>Ratings: {ratings} stars</small></p>
        <p><small>Ratings Count: {ratingsCount}</small></p>
        </div>
        <button onClick={()=> handleAddToCartbtn(product)} className='btn-cart'>
        <p className='btn-text'>Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
        </div>
    );
};

export default Product;