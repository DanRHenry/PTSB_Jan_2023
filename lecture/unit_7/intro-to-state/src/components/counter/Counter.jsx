import {useState} from 'react';
import './Counter.css'

export default function Counter() {
    const iCount = () => {
      console.log(`iCount running each time!`)
      return 0; // providing our initial value to useState (what count equals)
    }

    // const [count, setCount] = useState(0);
    // Calling iCount like below will treat iCount like a callback function, a function that only happens once to set the initial value.
    const [count, setCount] = useState(iCount);
    // Calling iCount() like so will re-render it each time the count changes
    // const [ count, setCount ] = useState(iCount());

    // setCount( ) is triggering a re-render and will not display until after the process is complete.

    const countUp = () => {
        // An example of how to use prevState w/ prevCount (prevCount is packaged with useState)

        // This allows us to view the previous value within the count variable and run the process like before.
        // setCount(prevCount => prevCount + 1)
        // setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)

        // setCount (count + 1) 
        // Checking to see how re-rendering works
        // console.log(count)
        // setCount (count + 1) 
        // console.log(count)
    }
    const countDown = () => {
        // setCount (count - 1) 
        setCount(prevCount => prevCount - 1)
    }

  return (
    <div className='counter'>
      <h1>Basic Counter Component</h1>
      <button onClick={countDown}>-</button>
      <span>{count}</span>
      <button onClick={countUp}>+</button>
    </div>
  )
}

