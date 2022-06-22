import './App.scss'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomeScreen from './Screens/homeScreen/HomeScreen'
import ProductScreen from './Screens/homeScreen/productScreen/ProductScreen'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='header'>
          <Link to='/'>Amazona</Link>
        </header>
        <main className='main'>
          <Routes>
            <Route path='/product/:slug/:name' element={<ProductScreen />} />
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
