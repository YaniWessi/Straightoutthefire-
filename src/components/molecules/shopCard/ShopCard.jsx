import React from 'react';

const ShopCard = ({product: {id, name, description, price, quantity, image, image_alt}}) => {
  const getImg = (filename) => new URL(`../../assets/images/${filename}.png`, import.meta.url).href
  const imgSrc = getImg(image)
  return(
    <div>
      {/* <div>{image}</div> */}
      {/* <div>{image_alt}</div> */}
      <img src={imgSrc} alt={image_alt} />
      <div>{name}</div>
      <div>{description}</div>
      <div>{price}</div>
      <div>{quantity}</div>
    </div>
  )
}

export default ShopCard; 

// this was bult 8th all
//