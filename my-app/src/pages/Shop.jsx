import React from 'react'
import Hero from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Newsletter } from '../Components/Newsletter/Newsletter'
import './Shop.css'
function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Newsletter/>
    </div>
  )
}

export default Shop