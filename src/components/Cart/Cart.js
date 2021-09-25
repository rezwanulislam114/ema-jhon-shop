import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart)
    // let total = 0;
    // for(const product of cart) {
    //     total = total + product.price;
    // }
    const total = cart.reduce((previus, product) => previus + product.price, 0);
    const shipping = total > 0 ? 20 : 0;
    const tex = total * .1;
    const grandTotal = total + shipping + tex;
    return (
        <div className="cart">
            <h2>cart summary</h2>
            <p>Items Order: {cart.length}</p>
            <h3>Total Price: {total.toFixed(2)}</h3>
            <h3>Shippig: {shipping}</h3>
            <h3>Tex: {tex.toFixed(2)}</h3>
            <h2>Grand Total: {grandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;