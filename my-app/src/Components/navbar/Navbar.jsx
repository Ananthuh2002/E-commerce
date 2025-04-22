import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
   const [menu , setmenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className='nav_logo'>
            <p>Shooper</p>
        </div>
        <ul className='menu-list'>
            <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to={"/"}>Shop</Link></li>
            <li onClick={()=>{setmenu("men")}}> <Link style={{textDecoration:'none'}} to={"/men"}>Men</Link></li>
            <li onClick={()=>{setmenu("women")}}><Link style={{textDecoration:'none'}} to={"/women"}>Women</Link></li>
            <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:'none'}} to={"/kids"}>Kids</Link></li>
        </ul>
            <button className='login-btn'><Link to={'/login'}>login</Link></button>
      
    </div>
  )
}

export default Navbar