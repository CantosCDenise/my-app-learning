import { useState } from "react";

export function Counter({ initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)
    
    function handleCounterIncrement(){
        setCounter((c) => c + 1)
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    )
}