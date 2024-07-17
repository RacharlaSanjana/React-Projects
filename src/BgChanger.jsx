import React from 'react'
import { useState } from 'react'

const BgChanger = () => {
const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shaow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:'red'}}>Red</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:'Blue'}}>Blue</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:'Green'}}>Green</button>
          <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:'yellow'}}>Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default BgChanger;