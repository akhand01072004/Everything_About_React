import { useState, useCallback, useEffect } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}~`";

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length ))
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(()=>{
    passwordGerator();
  },[length,numberAllowed,charAllowed,passwordGerator])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };
  

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-800 bg-gray-800'>
        <h1 className='text-white text-center my-3 text-2xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white text-black text-bold text-lg'
            placeholder='password'
            readOnly
          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrinl-0' onClick={copyToClipboard} > copy</button>
        </div>
        <div className='flex gap-3 text-bold text-lg'>
        <div className='flex text-sm gap-x-2'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer'
            onChange={(e) => { setlength(e.target.value) }}
          />
          <label > Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input type="checkbox" checked={numberAllowed} id="numberInput"
            onChange={() => { setNumberAllowed((prev) => !prev) }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input type="checkbox" defaultChecked={charAllowed} id="characterInput"
            onChange={() => { setCharAllowed((prev) => !prev) }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
