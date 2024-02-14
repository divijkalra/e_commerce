 import React from 'react';
 import Products from "../Products/Products.js";
 import { Route, Routes } from "react-router-dom";
 import Cart from "../Cart/Cart.js";
 const Switches = ({productItems,cartItems,handleAddProduct,handleRemoveProduct}) => {
     return (
         <div>
              <Routes>
              <Route path="/" element={<Products cartItems={cartItems} productItems={productItems} handleAddProduct={handleAddProduct} />}  ></Route>
                 <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>}></Route>
              </Routes>
         </div>
   );
};

export default Switches;