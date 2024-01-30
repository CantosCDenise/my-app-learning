import { useState } from "react";

export function TodoList() {
    const [inputContent, setInputContent] = useState("")

    function handleInputChange(event){
        setInputContent(event.target.value)
    }

const baseTodosArray = [
    "Fregar los platos",
    "Dormir", 
    "Merendar",
    "Estudiar"
]

    const [todosArray, setTodosArray] = useState(baseTodosArray)

    function handleFormSubmit(event){
        event.preventDefault()
        const showedTodosArray = [...todosArray, inputContent]
        console.log(showedTodosArray)
        setInputContent("")
    }

    function handleFormReset(event) {
        event.preventDefault()
        const resetTodosArray = [...baseTodosArray]
        setTodosArray(resetTodosArray)
    }

    function removeTodoFn(indexInArray){
        const updatedTodosArray = todosArray.filter((item, index) => index !== indexInArray)
        setTodosArray(updatedTodosArray) 
    }

    return (
        <div>
            <ul>
                {todosArray.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button type="button" onClick={() => removeTodoFn(index)}>Remove</button>
                    </li>
                    ))}
            </ul>

            <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
                <input 
                type="text"
                name="addinput"
                onChange={handleInputChange}
                value={inputContent}
                />
                <button type="submit">Add</button>
                <button type="reset">Reset</button>

            </form>
        </div>
    )
}