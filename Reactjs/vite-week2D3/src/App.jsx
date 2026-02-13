import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './component/Nav'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Unknown from './pages/Unknown'
import LandingPage from './pages/LandingPage'
import Products from './pages/Products'
import ProductDetails from './component/ProductDetails'

function App() {

  return (
    <>

      <Nav></Nav>
      <Routes>
        <Route path='*' element={<Unknown></Unknown>}></Route>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/product" element={<Products/>}></Route>
        <Route path="/productdetail/:value" element={<ProductDetails />} />

      </Routes>

    </>

  )
}

export default App
