import React from 'react'
import { useParams } from 'react-router-dom'

const ProductScreen = () => {
  const params = useParams()
  const { slug, name } = params
  return (
    <div>
      <h1>{slug}</h1>
      <h1>{name}</h1>
    </div>
  )
}

export default ProductScreen
