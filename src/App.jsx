import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Skills from './component/Skills'
import Education from './component/Education'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Education/>
    </>
  )
}

export default App
