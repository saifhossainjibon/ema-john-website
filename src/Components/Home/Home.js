import React from 'react';
import './Home.css'
import logo from '../../images/logo.png'

const Home = () => {
    return (
        <div className='home-container'>
            <img width={220} src={logo} alt="" />
            <nav>
                <a href="./home">Shop</a>
                <a href="./order">Order</a>
                <a href="./manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Home;