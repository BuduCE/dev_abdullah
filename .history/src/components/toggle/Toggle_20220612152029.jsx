import React from 'react'
import './Toggle.css'
import sun from '../../images/sun.png'
import moon from '../../images/moon.jpg'

const Toggle = () => {
  return (
    <div className='toggle'>
        <img src={sun} alt="" className='toggle-icon'/>
        <img src={moon} alt="" className='toggle-icon'/>
        <div className="toggle-btn"></div>
    </div>
  )
}

export default Toggle