import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

export function App(){
    return (
        <div>
            <Hello/>
            <Hello/>
            <Hello/>
            <Message/>
            <Welcome name="Denise"/>               
        </div>
    )
}
// Si no le paso nada a la prop name a Welcome sigue funcionando pero solo se imprime lo que ya está incluido en el welcome component