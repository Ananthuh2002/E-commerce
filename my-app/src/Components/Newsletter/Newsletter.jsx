import React from 'react'
import './Newsletter.css';
export const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h2>GET EXCLUSIVE OFFER THROUGH EMAIL</h2>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className='input-box'>
            <input className='email' type='email' placeholder='email'/>
            <button className='new-btn'>Subscribe</button>
        </div>
    </div>
  )
}
