import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      
    </>
  )
}

export default App
