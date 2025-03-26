import React from 'react'
import {useState, useRef, useEffect} from "react";

export default function App12() {
    const [price,setPrice] = useState(2);
    const prevPrice = useRef(1);
    const priceRef = useRef();
    useEffect(() => {
        if(prevPrice.current > price){
            priceRef.current.style.color = "teal";
        }
        else{
            priceRef.current.style.color = "thistle";
        }
        prevPrice.current = price;
    },[price])
    // const handleSubmit = () =>{
    //     prevPrice.current = price;
    // }
  return (
    <div>
        <h1>Price and Prevprice</h1>
        <p>
            <input type="number" placeholder='Enter Price'
            onChange={(e) => {setPrice(e.target.value)}}
            style={{padding:'10px'}}
            />
            {/* <button onClick={handleSubmit}>Submit</button> */}
        </p>
        Previous Price: {prevPrice.current}
        <h3 ref={priceRef}>Current Price: {price}</h3>
    </div>
  )
}
