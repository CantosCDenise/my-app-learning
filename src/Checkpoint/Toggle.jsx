import { useState } from "react"

export function Toggle(){
    const [toggle, setToggle] = useState(false)
    function handleToggle(){
        setToggle(!toggle)
    }
    return(
        <div>
            <button onClick={handleToggle}>Toggle</button>
            {toggle && <h1>Estoy activado</h1>}
            {!toggle && <h1>Estoy desactivado</h1>}
        </div>
    )
}