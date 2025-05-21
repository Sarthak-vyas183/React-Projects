import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false); 
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  useEffect(() => {
    passwordGenerator();
  }, []);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

 const  copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      navigator.clipboard.writeText(passwordRef.current.value);
    }
  }, [passwordRef]);

  return (
    <div className='w-screen h-screen bg-gradient-to-br from-black via-gray-900 to-amber-900 flex justify-center items-center'>
      <div className='w-full max-w-md bg-amber-600 rounded-xl shadow-2xl p-8 flex flex-col gap-6'>
        <h1 className='text-white text-3xl font-bold text-center mb-2'>Password Generator</h1>
        <div className='flex items-center bg-white rounded-md px-4 py-2'>
          <input
            type="text"
            value={password}
            readOnly
            className='flex-1 bg-transparent text-lg text-gray-800 outline-none'
          />
          <button
            className='ml-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition'
            onClick={() => {
              navigator.clipboard.writeText(password);
              alert("Password copied to clipboard!");
            }}
            title="Copy to clipboard"
          >
            Copy
          </button>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-4'>
            <label htmlFor="length" className='text-white font-medium'>Length:</label>
            <input
              id="length"
              type="range"
              min={4}
              max={32}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className='flex-1 accent-amber-900'
            />
            <span className='text-white font-semibold w-8 text-center'>{length}</span>
          </div>
          <div className='flex items-center gap-6'>
            <label className='flex items-center gap-2 text-white font-medium'>
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed(!charAllowed)}
                className='accent-amber-900 w-4 h-4'
              />
              Special Chars
            </label>
            <label className='flex items-center gap-2 text-white font-medium'>
              <input
                type="checkbox"
                checked={numAllowed}
                onChange={() => setNumAllowed(!numAllowed)}
                className='accent-amber-900 w-4 h-4'
              />
              Numbers
            </label>
          </div>
          <button
            className='w-full mt-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition'
            onClick={passwordGenerator}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
