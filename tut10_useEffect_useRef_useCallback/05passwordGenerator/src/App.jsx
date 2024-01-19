import { useCallback, useEffect, useState, useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "~!@#$%^&*()_+`;:/"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char);
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // ek range me select karana ho to
    // passwordRef.current?.setSelectionRange(0,6)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
          <h1 className='text-white text-center my-3 bg-gray-800'>Password generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3 bg-white justify-center'
              placeholder='password'
              readOnly
              ref={passwordRef} />

              <button 
              onClick={copyPasswordToClipboard}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
          </div>

          <div className='flex text-sm gap-x-2  bg-gray-800'>
            <div className='flex items-center gap-x-1  bg-gray-800'>
              <input 
              type="range"
              min={6}
              max={40}
              value={length}
              className='cursor-pointer'
              onChange={(e) =>{setlength(e.target.value)}}
              />
              <label className=' bg-gray-800'>Length: {length}</label>

            </div>

            <div className='flex items-center gap-x-1  bg-gray-800'>
              <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }} />
              <label className=' bg-gray-800'>Numbers</label>

            </div>
            <div className='flex items-center gap-x-1 bg-gray-800'>
              <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }} />
              <label className=' bg-gray-800'>Charactor</label>

            </div>
          </div>
        </div>
      
    </>
  )
}

export default App
