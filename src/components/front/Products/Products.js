import React from "react";
import { useState } from "react";
import "./Products.css";
const Products = ({ cartItems, productItems, handleAddProduct }) => {

    return (
        <>
             {cartItems.length > 0 ?
                <div className="cart-items-count">
                    Total no. of items are {cartItems.length}, go to cart to checkout
                </div>:<div className="cart-items-count">No items are selected</div>
            }
            <div className="products">

                {productItems.map((productItem) => (
                    <div className="card">
                        <div>
                            <img className="product-image" src={productItem.image} alt={productItem.name} />
                        </div>
                        <div>
                            <h3 className="product.name">
                                {productItem.name}
                            </h3>
                        </div>

                        <div className="product-price">
                            ₹{productItem.price}
                        </div>
                        <div >
                            <button className="product-add-button" onClick={() => handleAddProduct(productItem)}>Add to Cart</button>
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
}

export default Products;