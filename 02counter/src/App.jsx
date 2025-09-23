import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter,setCounter] = useState(15);
  
  // let counter = 5;
  const addValue = ()=>{
   setCounter(counter+1)
  }
  const decreaseValue = ()=>{
   setCounter(counter-1)
  }
  return (
    <>
      <h1>Hello </h1>
      <h2>Counter value: {counter}</h2>


      <button onClick={addValue}>Increase Value </button>
      <br />
      <button onClick={decreaseValue}>Decrease Value </button>

      <p>footer:</p>
    </>
  )
}

export default App
