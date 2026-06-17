import { useState } from 'react'
import './App.css'
import LandingPage from './LandingPage'
import Navbar from './Components/Home/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <LandingPage/>
    </>
  )
}

export default App
