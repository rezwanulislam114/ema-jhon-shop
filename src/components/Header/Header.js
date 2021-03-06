import React from 'react';
import './Header.css'
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navbar">
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;