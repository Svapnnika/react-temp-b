import React from 'react'
import { useRef, useState } from "react";
export default function App11() {
    const msgRef = useRef();
    const [color,setColor] = useState();
    const handleSubmit = () =>{
        msgRef.current.style.color = color;
    }
  return (
    <div>
        <h1>Text Changes according to input color given.</h1>
        <p>
            <input type="text" placeholder='Enter color' onChange={(e) => setColor(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </p>
        <p>
            <h2 ref={msgRef}>Hello Svap!</h2>
        </p>
    </div>
  )
}
