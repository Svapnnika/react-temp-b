import React from 'react'
import { useRef, useState } from 'react';


export default function App16() {
    let numRef = useRef();
    const [message, setMessage] = useState('');
    const handleSubmit = () => {
        let num = numRef.current.value
        if(num > 18){
            setMessage("Welcome!");
        }
        else{
           setMessage("You are not allowed!")
        }
    }
  return (
    <div>
      <h1>App16</h1>
      <input type="number" placeholder='Enter a num'
      ref={numRef}
      style={{padding:'10px', backgroundColor: 'black',
        color: 'thistle'}}
      />
      <button onClick={handleSubmit}>Submit</button>

      {message && (
        <div>
          <p style={{margin: 0, color: 'beige'}}>{message}</p>
        </div>
      )}
    </div>
  )
}
