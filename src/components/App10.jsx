import React from "react";
import { useState,useRef, useEffect } from "react";
import "./App10.css"
export default function App10() {
    const [run,setRun] = useState(0);
    const [wicket,setWicket] = useState(0);
    const [showmsg,setShowMessage] = useState("Lets begin the game!!");
    const runRef = useRef();
    const wicketRef = useRef();
    const msgRef = useRef();
    const handleRun=()=>{
        if(wicket < 10){
        setRun(run+v), setShowMessage("Hurray!! Well Done.");
        if (v===1) runRef.current.style.backgroundColor = "silver";
        if (v===4) runRef.current.style.backgroundColor = "teal";
        if (v===6) runRef.current.style.backgroundColor = "teal";
        wicketRef.current.style.transform = "scale(1)";
        runRef.current.style.transform = "scale(1.1)";
        wicketRef.current.style.background = "bisque"
    }
};
    const handleWicket=()=>{
        wicket < 10 && setWicket(wicket+1);
        if(wicket < 9){
            setShowMessage("Better luck next tym!");
            runRef.current.style.backgroundColor = "brown";
            runRef.current.style.transform = "scale(1)";
            wicketRef.current.style.transform = "scale(1.1)";
            wicketRef.current.style.backgroundColor = "thistle";
        }
        else{
            setShowMessage("Game Over!");
            msgRef.current.style.backgroundColor = "silver";
            runRef.current.style.backgroundColor = "gray";
            wicketRef.current.style.backgroundColor = "lavender";
        }
    }
    // useEffect(()=>{
    //     run > 0 && wicket < 10 && setShowMessage("Hurray!! Well Done.");
    //     const timer = setTimeout(() => {
    //         setShowMessage(null);
    //         }, 4000);
    //         return () => clearTimeout(timer);
    // },[run]);
    // useEffect(()=>{
    //     wicket > 9 && setShowMessage("Game Over!");
    //     wicket > 10 && setWicket(10)
    //     wicket > 0 && wicket < 9 && setShowMessage("Better luck next time!");
    //     const timer = setTimeout(() => {
    //         setShowMessage(null);
    //         }, 4000);
    //         return () => clearTimeout(timer);
    // },[wicket]);
    return (
      <div className="main">
        <h1>Cricket Score</h1>
        <div className="container">
            <div className="run" ref={runRef}>
                <button onClick={()=>handleRun(1)}>1</button>
                <button onClick={()=>handleRun(4)}>4</button>
                <button onClick={()=>handleRun(6)}>6</button>
                <div style={{ textAlign: 'center', marginTop: '3px', color:'black'}}>{run}</div>
            </div>
            <div className="wicket" ref={wicketRef}>
                <button onClick={handleWicket}>Wicket</button>
                <div style={{ textAlign: 'center', marginTop: '3px', color:'black' }}>{wicket}</div>
            </div>
        </div>
        <hr />
        <div className="message" ref={msgRef}>
            {" "}
            {showmsg}
        </div>
      </div>
    );
  }