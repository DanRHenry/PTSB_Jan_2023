// rfce shortcut
import { useState } from "react";

// import React from 'react'
export default function Counter() {
// export default function "./Counter.jsx";
const [countState, setNumber] = useState(0);
function incrementCounter() {
    countState += 1;
  }
function decrementCounter() {
    countState -+ 1;
}
// function Counter() {

  return (
    <div className='counter'>
        <button onClick={incrementCounter}>+</button>
        <span>{countState}</span>
        <button onClick={decrementCounter}>-</button>
    </div>
  )
}


// export default Nav;