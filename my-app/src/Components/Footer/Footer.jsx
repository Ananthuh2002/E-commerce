import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo_big.png'
export const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer_logo'>
    <img src={footer_logo}/>
    <p>SHoopre</p>
    </div>
    <ul className='items'>
        <li>company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>Contact</li>
    </ul>
    </div>
  )
}
