import { useState } from "react";
import classes from "./Counter.module.scss"

export function Counter({ initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)
    
    function handleCounterIncrement(){
        setCounter((c) => c + 1)
    }
    return (
        <div>
            <h2 className={counter % 2 === 0 ? classes.evenBg : classes.oddBg}>I have counted to {counter}</h2>
            <button className={classes.button} onClick={handleCounterIncrement}>Increment</button>
        </div>
    )
}


//en el h2 estamos asignando el className dependiendo de si el counter es par o impar, lo cual cambiará el color porque lo hemos puesto diferente en el scss.