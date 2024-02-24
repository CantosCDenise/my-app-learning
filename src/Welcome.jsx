import { Link, useNavigate, useParams } from "react-router-dom"

export function Welcome({ age }){

    const { name = "World" } = useParams()

    const WelcomeStyle = {
        backgroundColor: name ? 'greenyellow' : 'darkgray',
        color: '#333'
    }

    const navigate = useNavigate()

    function handleFormButtonClick(){
        navigate('/form')
    }

    return (
    <div style={WelcomeStyle}>
        <strong> Welcome, {name}!</strong>
        <p>Your age is {age}</p>
        {/* <Link to="/login">Login to the app</Link> */}
        <div>
            <button onClick={handleFormButtonClick}>Enter the app</button>
        </div>
    </div>
        )
}