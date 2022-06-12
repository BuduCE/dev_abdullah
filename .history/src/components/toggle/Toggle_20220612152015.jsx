import React from 'react'
import './Toggle.css'
import sun from '../../images/sun.png'
import moon from '../../images/moon.jpg'

const Toggle = () => {
  return (
    <div className='toggle'>
        <img src={sun} alt="" className=''/>
        <img src={moon} alt="" />
        <div className="toggle-btn"></div>
    </div>
  )
}

export default Toggle