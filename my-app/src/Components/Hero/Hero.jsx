import React from 'react'
import './Hero.css' 
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from '../Assests/arrow.png'
import Background from '../Background/Background'
function Hero() {
  return (
    <div className='hero'>
       <Background/>
        <div className='hero-left'>
        <h3>NEW ARRIVAL ONLY</h3>
        <div className='hand-icon'>
            <p>NEW</p>
            <img src={hand_icon} alt='hand'/>
        </div>
        <div className='subject'>
        <p>Collections</p>
        <p>for everyone</p>
        </div>
        <div className='latest-btn'>
            <p>Latest collection</p>
            <img src={arrow_icon} alt='arrow'/>
        </div>
        </div>
    </div>
  )
}

export default Hero