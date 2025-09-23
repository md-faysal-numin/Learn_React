import { useState } from 'react'
import Button from './components/Button'

function App() {

  const [color,setColor] = useState("olive")

  const changeColor= (color)=> {

    return ()=>{
      
      setColor(color);
    }
  };

  return (
    <>
      <div className='w-full h-screen duration-200'
      style ={
        {
          backgroundColor:color,
        }
      }
      >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-4'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <Button color={"blue"} onClick={changeColor("blue")}/>
          <Button color={"red"} onClick={changeColor("red")}/>
          <Button color={"green"} onClick={changeColor("green")}/>
         
        </div>
      </div>
      </div>
    </>
  )
}

export default App
