import { useState } from "react"

export function Lista(){
    const [lista, setLista] = useState({})
    const [item, setItem] = useState("")

    function handleInputChange(event){
        setItem(event.target.value)
    }
    function handleAdd(){
        const newLista = lista.push({item})
        setLista(newLista)
    }
    return(
        <div>
            <div>
                <input type="text" value={item} onChange={handleInputChange}/>
                <button type="button" onClick={handleAdd}>Add</button>
            </div>
            <ul>
                {lista.map((item) => (
                    <li key={item.name}></li>
                ))}
            </ul>
        </div>
    )
}