import React from 'react';
import ShopCard from '../../molecules/shopCard/ShopCard';

const ShopGrid = ({products}) => {
  console.log(products)
  return(

      products.map((product) => <ShopCard product={product} key={product.id}/>)
    
  )
}

export default ShopGrid;


//1 first in molecules we create a ddcitotry called Shopcard 
//2second created dictory in templates called shopgrid and created a file called shopgrid 
//3 thirds we wrote code for shogrid including products prop: we console logged it. 
//4 Then we imported shopGrid into shop 
//5 then we imported the productsConfig as products 
//6 the render the shopGrid component passing in product as a prop: those products added up being the product config. 
//9 importing the shopcard 