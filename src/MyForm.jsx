import { useState } from "react"

function createData(){
    return {
        username: '',
        password: '',
        session: false
    }
}

export function MyForm(){
    const [data, setData] = useState(createData())

    function handleInputChange(event){
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type

        setData(d => {
            return { 
                ...d,
                [name]: type === 'checkbox' ? checked : value,
            }
        })

    }
    function handleResetForm(){
        setData(createData())
    }
    function handleLoginFormSubmit(event){
        event.preventDefault()
        console.log('Login button pressed', data)
    }

    return (
        <form onSubmit={handleLoginFormSubmit}>
            <h1>My Form</h1>
            <input name="username" value={data.username} onChange={handleInputChange} />      
            <input name="password" type="password" value={data.password} onChange={handleInputChange} /> 
            <input name="session" type="checkbox" checked={data.session} onChange={handleInputChange}/>
            <button type="submit" disabled={!data.username || !data.password}>Login</button>
            <button type="button" onClick={handleResetForm}>Reset</button>

            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </form>
    )
}


// in React the onChange is triggered as soon as the input changes without needing for the input to lose its focus (that happens in the onInput event in html).
// Every time an event handler is called as a response to an event we always receive the event object as the first parameter of the event itself so that we can 
    // take a look at what happened with the event itself.

//I want the name of the input to be the same as the name of the attribute of my data object so that I can easily update it

//always use the form tag when implementing a form

//we use the preventDefault method because we have an only 1 page web so we don't want the form to do its default behavior which is to go to another page
