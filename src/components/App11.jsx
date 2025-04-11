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
        <h1>useRef is a React hook that lets you:</h1>
        <ul>
            <li>Reference a DOM element (like an input or div).</li>
            <li>Store a mutable value that doesn’t trigger re-renders when it changes.</li>
            <li>Here, Text Changes according to input color given.</li>
        </ul>
        <p>
            <input type="text" placeholder='Enter color' 
            onChange={(e) => setColor(e.target.value)}
            style = {{padding: '10px'}}
            />
            <button onClick={handleSubmit}>Submit</button>
        </p>
        <p>
            <h1 ref={msgRef}>Hello Svap!</h1>
        </p>
    </div>
  )
}
