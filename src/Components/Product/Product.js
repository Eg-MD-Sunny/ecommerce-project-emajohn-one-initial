import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props.allProduct);
    const {name, img , seller, price, stock} = props.allProduct;
    return (
        <div className="product">
            <div className="left-container">
                <img src={img} alt="" />
            </div>
            <div className="right-container">
                <p className="product-name">{name}</p>
                <br></br>
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <br></br>
                <p>Only {stock} left in stock - order soon</p>
                <button className="main-button" onClick={() => props.handleAddProduct(props.allProduct)}><span className="position-shift"><FontAwesomeIcon icon={faShoppingCart} /></span>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;