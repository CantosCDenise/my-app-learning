import { useState } from "react";

function useCounter(initialValue = 0){
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement(){
        setCounter((c) => c + 1)
    }

    function handleCounterDecrement(){
        setCounter((c) => c - 1)
    }

    function handleReset() {
        setCounter(initialValue)
    }

    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleReset
    }

}

export function HookCounterOld({initialValue = 0}){
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)

    return (
        <div>
            <h2>Counter: {counter} </h2>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

//we can use a custom hook to extract this logic. It can call other hooks.
//I've extracted the logic I had previously written inside my hook counter component
    //within a custom hook which I can now call everytime I need a counter.

//I've said that this hook returns an object so I'll destructure this object 
    //and extract the value of the counter 

//The component is being used as a presentational unit while the hook
    //is being used as logical unit