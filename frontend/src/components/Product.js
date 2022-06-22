import './Product.scss'
import React from 'react'

const Product = ({
  name,
  slug,
  category,
  image,
  price,
  countInStock,
  brand,
  rating,
  numReviews,
  description,
  
}) => {
  return (
    <>
      <div key={slug} className='product'>
        <a href={`/product/${slug}`}>
          <img src={image} alt={name} />
        </a>
        <div className='product-info'>
          <a href={`/product/${slug}`}>
            <p>{name}</p>
          </a>
          <p>${price}</p>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default Product
