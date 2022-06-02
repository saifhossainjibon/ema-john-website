import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, seller, img } = props.product
    // console.log(props.product)
    return (
        <div className='product-section'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h4>{name}</h4>
                <h4>By : {seller}</h4>
                <h4>{price}</h4>
                <button
                    className='addToCartBtn'
                >Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;