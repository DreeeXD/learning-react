import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "sanskar",
    age: 20
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-4'>Tailwind test</h1>
      
      <Card username = "Wow" btnText = "Click Me" />
      <Card username = "Sanskar" btnText = "Visit Me" />
    </>
  )
}

export default App
