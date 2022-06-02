import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const { cart } = props
    const total = cart.reduce((previous, current) => previous + current.price, 0)
    const shippingCost = total > 0 ? 15 : 0
    const tax = (total / 100) * 10
    const grandTotal = total + shippingCost + tax
    return (
        <div className='cart-container'>
            <h3 className='order-text'>Order History</h3>
            <div className='cart-section'>
                <div>
                    <h4>Items order :</h4>
                    <h3>Total Price:</h3>
                    <h4>Shipping Cost :</h4>
                    <h4>Tax : </h4>
                    <h3>Total Amount: </h3>
                </div>
                <div>
                    <h4> {cart.length} </h4>
                    <h3> {total.toFixed(2)}</h3>
                    <h4> {shippingCost}</h4>
                    <h4> {tax.toFixed(2)}</h4>
                    <h3> {grandTotal.toFixed(2)}</h3>
                </div>
            </div>

        </div>
    );
};

export default Cart;