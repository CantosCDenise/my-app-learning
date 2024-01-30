import { useState } from "react"

export function FormCheck(){
const [data, setData] = useState(undefined)
    function handleSubmit(event){     
        event.preventDefault()
        const formData = new FormData (event.target)

        const data = {
            name: formData.get('name'),
            surname: formData.get('surname'),
            email: formData.get('email')
        }

        setData(data)

    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name"></input>
            <input name="surname"></input>
            <input name="email"></input>
            <button>Submit</button>
            {data && <div>
                <h3>Name: {data.name}</h3>
                <h3>Surname: {data.surname}</h3>
                <h3>Email: {data.email}</h3>
            </div>}
        </form>
        
    )
}