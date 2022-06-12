import React from 'react'
import './Toggle.css'
import sun from '../../images/sun.png'
import moon from '../../images/moon.jpg'

const Toggle = () => {
  return (
    <div className='toggle'>
        <img src={sun} alt="" />
        <img src={moon} alt="" />
        
    </div>
  )
}

export default Toggle