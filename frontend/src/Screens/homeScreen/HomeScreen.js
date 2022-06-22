import React from 'react'
import data from '../../data'
import Product from '../../components/product/Product'
const HomeScreen = () => {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className='products'>
        {data.products.map((product) => (
          <Product
            name={product.name}
            key={product.slug}
            image={product.image}
            slug={product.slug}
            price={product.price}
            countInStock={product.countInStock}
          />
        ))}
      </div>
    </div>
  )
}

export default HomeScreen
