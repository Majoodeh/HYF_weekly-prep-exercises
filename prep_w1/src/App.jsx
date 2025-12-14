import { useState } from 'react';
import React from 'react';


import './App.css'




function App() {
  const [count, setCount] = useState(0)

  function increaseValue(){
    setCount((prevCounter)=> prevCounter+1);
    
  }
  return (
    <>
    <h2>Current Value =  {count}</h2>
      <button onClick ={increaseValue}>Increase +1</button>

     
    </>
  )
}

export default App
