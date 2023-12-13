import { Hello } from "./Hello";
import { Message } from "./Message";

export function App(){
    return (
        <div>
            <Hello/>
            <Hello/>
            <Hello/>
            <Message/>      
        </div>
    )
}
// Sí, puedo usar el componente Hello más de una vez en App. 
// Y sí, puedo renderizar el componente Message directamente en App, siempre que renderice App en index.jsx en vez de Hello