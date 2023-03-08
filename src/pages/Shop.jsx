import React from 'react';
import "./shop.css";
import ShopGrid from '../components/templates/shopGrid/ShopGrid';
import products from '../assets/config/productConfig.json';

const Shop = () => {

  return (
        <div className="shop-container">
          <ShopGrid products={products}/>
        </div>
  )
}

export default Shop; 


// 7 The reason we use Json it because we could have an array in the components but we use json as a way to make it clean. We are asteracting that array that could be here into its own file. 