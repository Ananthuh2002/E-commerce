import React, { useState } from 'react'
import star from '../Assests/star_icon.png'
import './Productdisplay.css'
const Productdisplay = (props) => {

    const [isAdded , setAdded] =useState(true);
    const [isSelect , setSelect] =useState(null);
    const {product} = props

    const handclick = ()=> {
        setAdded(false)
    }
    const selected  = (size)=> {
        setSelect(size)
    }
  return (
    <div className='product'>
      <div className='left-side'>
     <div className='image-list'>
      <img className='imag' src= {product.image} alt='item'/>
      <img className='imag'  src= {product.image} alt='item'/>
      <img className='imag' src= {product.image} alt='item'/>
      <img className='imag' src= {product.image} alt='item'/>
     </div>
     <div className='main-image'>
     <img src= {product.image} alt='item'/>
     </div>
      </div>
      <div className='right-side'>
     <h2>{product.name}</h2>
     <div className='rating'>
     <img src= {star} alt='item'/>
     <img src= {star} alt='item'/>
     <img src= {star} alt='item'/>
     <img src= {star} alt='item'/>
     </div>
     <div className='rate'>
     <p>₹{product.new_price}</p>
     <p className='old-price'>₹{product.old_price}</p>
     </div>
     <div className='description'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. </p>
     </div>
     <div className='size'>
        <ul >
        <li className={isSelect === 'S' ? 'selected' : ''} onClick={()=>selected ('S')}>S</li>
        <li className={isSelect ==='M' ? 'selected' : ''} onClick={ ()=>selected ('M')}>M</li>
        <li className={isSelect === 'XL' ? 'selected' : ''} onClick={()=>selected ('XL')}>XL</li>
        <li className={isSelect === 'XXL' ? 'selected' : ''} onClick={()=>selected ('XXL')}>XXL</li>
      </ul>
     </div>
     <div className='product-btn'>
     <button class={`addtocart ${isAdded ? '' : 'added'}`} onClick={handclick}>
        {isAdded ? (
     <div class="pretext" >
        <i class="fas fa-cart-plus"></i> ADD TO CART
    </div> 
    ) :(
    <div >
        <i class="fas fa-check"></i> ADDED
    </div>
    )
}
    </button>
     </div>
     </div>
    </div>
  )
}

export default Productdisplay