import { useCounter } from "./UseCounter"

export function HookCounter({initialValue = 0}){
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


//Hemos recortado el useCounter function y ahora lo importamos desde el
    //archivo nuevo que hemos creado


//The useCounter hook is going to create a new state variable
    //every time it's used by a different component