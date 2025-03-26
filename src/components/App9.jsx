import React from "react";
import { useState, useEffect } from "react";
export default function App9() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(Number(num1)+Number(num2));
  },[num1])
  useEffect(() => {
    setTotal(Number(num1)*Number(num2));
  },[num2])
  return (
    <div>
        <h2>Add 2 numbers and get total</h2>
      <p>
      <input
        type="number"
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter a number1"
      ></input>
      </p>
      <p>
      <input
        type="number"
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter a number2"
      ></input>
      </p>
      <p>Total:{total}</p>
      <hr></hr>
    </div>
  );
}