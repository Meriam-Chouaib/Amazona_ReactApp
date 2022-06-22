import './Product.scss'
import React from 'react'
import { Link } from 'react-router-dom'

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
        <Link to={`/product/${slug}/${name}`}>
          <img src={image} alt={name} />
        </Link>
        <div className='product-info'>
          <Link to={`/product/${slug}/${name}`}>
            <p>{name}</p>
          </Link>
          <p>${price}</p>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default Product
