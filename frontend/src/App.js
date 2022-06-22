import './App.scss'
import data from './data'
import Product from './components/Product.js'
function App() {
  return (
    <div className='App'>
      <header className='header'>
        <a href='/'>Amazona</a>
      </header>
      <main className='main'>
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
      </main>
    </div>
  )
}

export default App
