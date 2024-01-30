import { useState } from "react"

export function useCounter(initialValue = 0){
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


//hemos cortado el custom hook del otro archivo y lo hemos puesto en un 
    //archivo nuevo, exportándolo