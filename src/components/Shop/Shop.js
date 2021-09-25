import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // all state 
    const [products, setProducts] = useState([]);
    const [searchedProducts, setSearchProducts] = useState([]);

    useEffect(() => {
        fetch ('./products.JSON')
        .then (res => res.json())
        .then (data => {
            setProducts(data);
            setSearchProducts(data)
        });
    }, []);

    const [cart, setCart] = useState([]);

    const addToCartHandler = product => {
        const newCart = [...cart, product];
        setCart(newCart)
    }

    const searchHandle = event => {
        const searchName = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchName.toLowerCase()));
        setSearchProducts(matchedProducts);
    }

    return (
        <div>
            <div className="search-section">
                <input onChange={searchHandle} type="text" placeholder="Search for Products" />
                <span><i class="fas fa-search"></i>{searchedProducts.length}</span>
            </div>
            <div className="shop">
                <div className="product-section">
                    {
                        searchedProducts.map(product => <Product key={product.key} product={product} addToCartHandler={addToCartHandler}></Product>)
                    }
                </div>
                <div className="cart-section">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;