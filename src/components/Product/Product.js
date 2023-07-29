import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    //console.log(props)
    const { img, name, seller, price, stock } = props.product
    return (

        <div className="product">

            <div style={{ paddingRight: "10px" }}>
                <img src={img} alt="" />
            </div>


            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p style={{ marginLeft: "10px" }}><small> by: {seller}</small></p>
                <p style={{ marginLeft: "10px" }}>$ {price}</p>
                <p style={{ marginLeft: "10px" }}><small>Only {stock} left in stock</small></p>
                <button className='main-button' onClick={()=> props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>

        </div>

    );
};

export default Product;