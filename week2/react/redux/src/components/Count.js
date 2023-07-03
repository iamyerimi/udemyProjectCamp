import { useState } from "react"

const Count = () => {

    const [count, setCount] = useState(0);

const incrementHandler = () =>{
    setCount(count + 1);
}
const decrementHandler = () => {
setCount(count -1)
}

const resetHandler = () => {
setCount(0);
}
    return(
        <div>
            <h1>Count.js <br /> Count: {count}</h1>
            <button onClick={incrementHandler}>increment</button>
            <button onClick={decrementHandler}>decrement</button>
            <button onClick={resetHandler}>reset</button>
        </div>
    )
}

export default Count;