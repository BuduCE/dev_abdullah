import React from 'react'
import './ProductList.css'
import Product from '../product/Product'
import {products} from '../../data'

const ProductList = () => {
  return (
    <div className='pL'>
        <div className="pL-texts">
            <h1 className="pL-title">Continue to inspire. It's Abdullah here</h1>
            <p className="pL-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eaque a mollitia quis maxime optio autem iusto deserunt!.
            </p>
        </div>
        <div className="pL-list">
            {products.map((item)=> (
                <Product key={item.id} img={item.picture} link={item.link}/>
            ))}
        </div>
    </div>
  )
}

export default ProductList