import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const addValue=()=>{
    console.log('clicked',counter);
    counter++;
    setCounter(counter);
  }
  //let counter=5;
  const decValue=()=>{
    console.log('clicked',counter);
    if(counter>0)
    counter--;
    setCounter(counter);
  }
  return (
    <>
       <h1>chai aur react</h1>
       <h2>counter value: {counter}</h2>

       <button
        onClick={addValue}
        >Add value</button>
       <br />
       <button
       onClick={decValue}
       >remove value</button>
    </>
  )
}

export default App
