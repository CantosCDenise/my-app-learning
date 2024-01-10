export function Welcome({ name, age }){
const WelcomeStyle = {
    backgroundColor: name ? 'greenyellow' : 'darkgray',
    color: '#333'
}

    return (
    <div style={WelcomeStyle}>
        <strong> Welcome, {name}!</strong>
        <p>Your age is {age}</p>
    </div>
        )
}