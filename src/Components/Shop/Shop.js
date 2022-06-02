import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const handleAddToCart = product => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className='all-product-section'>
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;