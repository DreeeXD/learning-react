import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  //let counter = 5

  const AddValue = () => {
    console.log("clicked", counter);
    
    //counter = counter + 1
    setCounter(counter + 1)
  }

  const ReduceValue = () => {
    console.log("clicked", counter);
    setCounter(counter - 1)
  }


  return (
    <>
      <h1> react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick = {AddValue}
      >Add value</button> 
      
      <br />
      <br />
      <button onClick = {ReduceValue}
      >Remove value</button>
    </>
  )
}

export default App
