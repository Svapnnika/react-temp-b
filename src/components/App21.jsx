import React from 'react'
import {useEffect} from 'react';
export default function App21() {
    useEffect(() => {
        console.log("component Mounted")
        return () => {
            console.log("component unmounted")
        }
    },[]);
  return (
    <div>
      <h1>App21</h1>
    </div>
  )
}
