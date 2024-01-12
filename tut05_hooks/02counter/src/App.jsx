import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 15;

  let  addValue = () => {
    // counter = counter+1;
    // console.log("clicked adding value", counter);
    // setCounter(counter);

    // setCounter ko duplicate kar de to ek baar me coute increase hoga ager ye dekana he to previes value ka option hota he use is prakar kar sakte he
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    
    // is prakar karne se kitana hi kare value sirf ek baar update hogi par 

    // isi ko prevCounter me store karke kare to ek baar value ko add kar sakte he

    // tutorial number 08 
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    console.log(counter);
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
      <h2>Counter value: {counter}</h2>

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
