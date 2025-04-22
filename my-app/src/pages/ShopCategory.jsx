import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import dropdown from '../Components/Assests/dropdown_icon.png'
import './ShopCategory.css'
import { Link } from 'react-router-dom';

function ShopCategory(props) {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='category'>
    <img src={props.banner} alt=''/>
 <div className='shop-list'>
     <p>Showing 1-12 out of 36 products </p> 
  </div>
  <div className='sort'>
    Sort by <img src={dropdown} alt='drop'/>
  </div>
  <div className='item-category'>
  {all_product.map((item) => {
  if (props.category === item.category) {
    return(
    <div className='item-list'
   key={item.id}>
    <Link to={`/${item.id}`}> <img src={item.image} alt={item.name} /></Link>
    <p className='caption'>{item.name}</p>
    <div className='prices'>
    <p>${item.new_price}</p>
    <p className='old-price'>${item.old_price}</p>
    </div>
  </div>
    )
  }
  else{
    return null;
  }})}

  </div>
  </div>
  )

}

export default ShopCategory