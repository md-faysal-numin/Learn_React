import { useState } from 'react'
import React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 mb-4 p-4 text-black rounded-xl'>Hello World</h1>
      <Card userName="Numin" btnText="Click me"/>
      <Card userName="Rajon"  btnText="Click me more"/>
    </>
  )
}

export default App
