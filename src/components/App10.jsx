import React from "react";
import { useState, useEffect } from "react";
import "./App10.css"
export default function App10() {
    const [run,setRun] = useState(0);
    const [wicket,setWicket] = useState(0);
    const [showmsg,setShowMessage] = useState("Lets begin the game!!");
    const handleRun=()=>{
        setRun(run+1);
    }
    const handleWicket=()=>{
        setWicket(wicket+1);
    }
    useEffect(()=>{
        run > 0 && setShowMessage("Hurray!! Well Done.");
        const timer = setTimeout(() => {
            setShowMessage(null);
            }, 4000);
            return () => clearTimeout(timer);
    },[run]);
    useEffect(()=>{
        wicket > 9 && setShowMessage("Game Over!");
        wicket > 10 && setWicket(10)
        wicket > 0 && wicket < 9 && setShowMessage("Better luck next time!");
        const timer = setTimeout(() => {
            setShowMessage(null);
            }, 4000);
            return () => clearTimeout(timer);
    },[wicket]);
    return (
      <div className="main">
        <h1 style={{textAlign:'center'}}>Cricket Score</h1>
        <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '40px' }}>
                <button onClick={handleRun}>Run</button>
                <div style={{ textAlign: 'center', marginTop: '3px' }}>{run}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <button onClick={handleWicket}>Wicket</button>
                <div style={{ textAlign: 'center', marginTop: '3px' }}>{wicket}</div>
            </div>
        </div>
        <hr /> 
        <div style={{
            color: showmsg === "Well Done!" ? 'black' : 'balck',
            margin: '10px 0',
            fontWeight: 'bold',
            textAlign: 'center'
        }}>
            {showmsg}
        </div>
      </div>
    );
  }