import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import Productdisplay from '../Components/Productdisplay/Productdisplay';


function Product() {
 const {all_product} = useContext(ShopContext);
   const {productId} =useParams();
  console.log(all_product);
 // Check that this ID exists in the array
// const product = all_product.find((product) => product.id === productId);
  const product = all_product.find((product) => product.id === parseInt(productId));

 

  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
    </div>
  )
}

export default Product