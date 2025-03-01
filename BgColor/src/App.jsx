import { useState } from 'react'
import ColorChange from './Components/ColorChange'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ColorChange/>
    </>
  )
}

export default App
