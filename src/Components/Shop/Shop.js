import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/Fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])

    const handleAddToCart = product => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.key)
    }
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart()
            const storedCart = [];
            for (const key in savedCart) {
                const storedProduct = products.find(product => product.key === key)
                // console.log(key, storedProduct)
                if (storedProduct) {
                    const quantity = savedCart[key]
                    storedProduct.quantity = quantity
                    storedCart.push(storedProduct)
                }

            }
            setCart(storedCart)
        }
    }, [products])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, [])
    const handleSearch = event => {
        const searchText = event.target.value
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        // console.log(matchedProducts.length)
        setDisplayProducts(matchedProducts)

    }
    return (
        <>
            <div className='search-container'>
                <input
                    type="text"
                    placeholder='search your product'
                    onChange={handleSearch}
                />
            </div>

            <div className='shop-container'>
                <div className='all-product-section'>
                    {
                        displayProducts.map(product => <Product
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
        </>
    );
};

export default Shop;