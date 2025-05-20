import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false); 
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
     let pass = "";
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
     if(numAllowed) str += "0123456789";
     if(charAllowed) str += "@#$%^&*()_+";

     for(let i=1; i<=length; i++) {
       let char = Math.floor(Math.random() * str.length + 1);
       pass += str.charAt(char);
     }
     setPassword(pass)
    console.log(pass)
  }, [length, numAllowed, charAllowed, setPassword])
  return (
   <div className='w-screen h-screen bg-black flex justify-center items-center '>
    <div className='w-[40vw] h-30 bg-amber-600 rounded-md'>

     <h1 className='text-white p-2 text-2xl'> new password is : {password}</h1> <br />
     
     <div className='flex gap-2 px-2 text-white'>
     <button className='p-2 bg-blue-600 rounded-md '>Number Allow</button>
     <button className='p-2 bg-blue-600 rounded-md '>Char Allow</button>
      <button className='p-2 bg-blue-600 rounded-md '>Generate Password</button>
     </div>

    </div>
   </div>
  ) 
}

export default App
