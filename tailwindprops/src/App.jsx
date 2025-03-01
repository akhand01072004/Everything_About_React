import { useState } from 'react'
import Card from './Components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(13)
  function increase(){
    setCount(prevCount => prevCount+1);
    setCount(prevCount => prevCount+3);
  }
  return (
    <>
    <Card titlename="Up Hill Sunset" ImageUrl={"https://images.unsplash.com/photo-1682685797208-c741d58c2eff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeSUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"}/>
    <Card titlename="Mountain Rock" ImageUrl={"https://images.unsplash.com/photo-1682687982183-c2937a74257c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2NlbmVyeSUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"}/>
    <button className='inline-block bg-blue-800 rounded-lg px-6 py-4 text-lg font-bold text-white mr-2 mb-2 p-4' onClick={increase}>Value : {count}</button>
    
    </>
  )
}

export default App
