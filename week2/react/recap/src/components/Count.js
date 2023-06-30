import React, { useState } from "react";

const Count = () => {

    const [count, setCount] = useState(0);

    const incrementHandler =() =>{
        setCount(count + 1);
    }
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incrementHandler}>increment</button>
        </div>
    )
};
export default Count;
