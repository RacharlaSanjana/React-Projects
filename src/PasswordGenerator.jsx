import { useState, useCallback, useEffect,useRef } from 'react';

function passwordGenerators() {
  const [length, setLength] = useState(8); // Set a reasonable default length
  const [number, setNumber] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordref=useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) chars += "0123456789";
    if (charAllowed) chars += "!@#$%^&*(){}[]`~";
    
    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(charIndex);
    }
    
    setPassword(pass);
  }, [length, number, charAllowed]);
  const copytoclipboard=useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password);
  },[password])
  useEffect(() => {
    passwordGenerator();
  }, [length, number, charAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password} 
            readOnly
            className='outline-none w-full py-1 px-3'
            ref={passwordref}
          />
          <button onClick={copytoclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Generate</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" checked={number} id="numberInput" onChange={() => setNumber((prev) => !prev)} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" checked={charAllowed} id="charInput" onChange={() => setCharAllowed((prev) => !prev)} />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default passwordGenerators;
