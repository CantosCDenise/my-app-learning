import { useState } from "react"

function MyListItem ({item}){
    const [counter, setCounter] = useState(0)

    function handleIncrementCounter(){
        setCounter((c) => c + 1)
    }

    return (
        <li>
            <h4>{item.name}</h4>
            <p>{item.age} years old</p>
            <button onClick={handleIncrementCounter}>{counter}</button>
        </li>
    )
}

export function MyList({items}){

    return (
        <ul>
            {items.map((item) => (
                <MyListItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

//we can use name as key, but if we have repeated names it won't work because keys have to be unique. 
    //We can use index, but it's not stable because if the array is sorted, it will change. (we would have to add index as a parameter for map --> items.map((item, index))
//In reality, you'll probably use arrays of items where you have the id.

//the key must always be attached to the topmost component, it should always be placed inside the first component that you render, that you return from the map method.
//key is a special keyword reserved by React, you cannot use it on your own.