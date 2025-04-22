import React from 'react'
import './Background.css'
import Images from '../Assests/Images.js'
const Background = () => {
  return (
    <div className='background'>
     <div className="background-container">
        {Images.map((image, index) => (
          <img
            key={image.id}
            src={image.name}
            alt={`img${image.id}`}
            className={`background-image image-${index + 1}`}
          />
        ))}
      </div>
        </div>
  )
}

export default Background