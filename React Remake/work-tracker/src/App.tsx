import { useState } from 'react'
import Tabs from "./Tabs";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tabs />
    </>
  )
}

export default App
