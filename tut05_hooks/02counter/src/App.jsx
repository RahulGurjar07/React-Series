import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 15;

  let addValue = () => {
    counter = counter+1;
    console.log("clicked adding value", counter);
    setCounter(counter);
  }

  let removeValue = () => {
    // ager 1 se niche value na jaye to if statement ka use kar sakte he
    // ager negetive value me le jana ho to if condition ko hata denge
    if (!(counter == 1) )
    counter = counter - 1;
    console.log("removing value", counter);
    setCounter(counter)
  }
  

  return (
    <>
      <h1>React series from chai or code</h1>
      <h2>Counter value: {setCounter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>

      <p>paragraph {counter}</p>

      <footer>Footer {counter}</footer>
     
    </>
  )
}

export default App
