import React from 'react'
import './Popular.css'
import data_product from '../Assests/data'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
export const Popular = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []); // Em
  return (

    //API fetching example
    // <div>
    //   <h1>Product List</h1>
    //   <ul>
    //     {products.map(product => (
    //       <li key={product.id}>
    //         <h2>{product.title}</h2>
    //         <p>{product.description}</p>
    //         <p>Price: ${product.price}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className='popular'>
         <h2>POPULAR IN WOMEN</h2>
         <div className='popular-item'>
         {data_product.map((item) => (
  <div className='item-list'
   key={item.id}>
  <Link to={'/women'}><img src={item.image} alt={item.name} /></Link>
    <p className='caption'>{item.name}</p>
    <div className='prices'>
    <p>${item.new_price}</p>
    <p className='old-price'>${item.old_price}</p>
    </div>
  </div>
))}     </div>
    </div>
  )
} 

