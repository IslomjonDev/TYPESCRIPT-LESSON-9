import React from 'react'
import { useGetProductsQuery } from '../../context/api/ProductApi'
import './Content.scss'
const Content = () => {
    const {data} = useGetProductsQuery({limit:3} )

    const products = data?.data?.products?.map(product => (
        <div key={product.id} className='product__item'>
            <img src={product.urls[0]} alt="" />
            <span>
                <h2>{product.title}</h2>
                <p>{product.info[0]}</p>
            </span>
        </div>
    ))

  return (
    <>
    <div className="container">
     <div className="content__wrapper">
        {products}
     </div>
    </div>
    </>
  )
}

export default Content