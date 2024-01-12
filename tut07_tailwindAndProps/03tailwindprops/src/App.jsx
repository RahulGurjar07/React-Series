import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    name: "rahul",
    img: "https://images.pexels.com/photos/1898558/pexels-photo-1898558.jpeg?auto=compress&cs=tinysrgb&w=600"
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>

      <div className='flex p-4 m-4 space-x-6'>

        {/* card me object ke through bhi data de sakte he or yhi par simplae variable me bhi de sakte he  */}
        <Card btntxt="Click Me" obj={myobj}/> 
        <Card name="rahul_gurjar" btntxt="Click Me" img="https://images.pexels.com/photos/1008186/pexels-photo-1008186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card name="rahul033" img="https://images.pexels.com/photos/2516030/pexels-photo-2516030.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      </div>
    </>
  )
}

export default App
