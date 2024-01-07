export function MyUncontrolledForm(){
    function handleFormSubmit(event){
        event.preventDefault()
        
        //Option 1 to extract the value:
        // const username = event.target.elements.namedItem('username').value
        // const password = event.target.elements.namedItem('password').value
        // const session = event.target.elements.namedItem('session').checked

        // const data = {
        //     username,
        //     password,
        //     session
        // }

        //Option 2 to extract the value:
        const formData = new FormData(event.target)
        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
            session: formData.get('session') === 'on' ? true : false
        }


        console.log(data)
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <h1>My uncontrolled form</h1>
            <input name="username"/>
            <input name="password" type="password"/>
            <input name="session" type="checkbox"/>
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}

//each one of these inputs is handling its own internal state by itself, we don't an state variable nor event handlers

//we need to directly access the HTML elements within our page and extract the value contained within them from the elements themselves 
    //(using event.target because its a reference to the form itself)

//namedItem is a method

//creating an uncontrolled form is easier because you don't have to keep track of all the inputs within a state variable nor create 
    //event handlers to manage changes happening within these inputs. But you don't have any control over the inputs themselves. 
    //For example I can't make the login button disabled when there's not data in the inputs if this is an uncontrolled form.                                      