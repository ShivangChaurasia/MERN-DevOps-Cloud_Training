import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './component/Nav'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>

      <Nav></Nav>
      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>

    </>

  )
}

export default App
