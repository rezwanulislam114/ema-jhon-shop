import React from 'react';
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    const {img, name, price, seller, stock, star} = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
                <h2>{name}</h2>
                <p><small>By: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                initialRating={star}
                readonly
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                />
                <br /> <br />
                <button onClick={() => props.addToCartHandler(props.product)} className="purchase-button"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;