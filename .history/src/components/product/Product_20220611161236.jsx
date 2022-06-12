import React from 'react'
import './Product.css'

const Product = ({img,link}) => {
  return (
    <div className='pdt'>
      <div className="pdt-browser">
        <div className="pdt-circle"></div>
        <div className="pdt-circle"></div>
        <div className="pdt-circle"></div>
      </div>
      <a href={link}>
        <img src={img} alt="" className='pdt-img'/>
      </a>
    </div>
  )
}

export default Product