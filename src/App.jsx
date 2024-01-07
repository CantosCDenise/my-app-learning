import { Age } from "./Age";
import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClicker";
import { MyForm } from "./MyForm";
import { MyUncontrolledForm } from "./MyUncontrolledForm";
import { Welcome } from "./Welcome";

export function App(){
    function handleShowTime(){
        const now = new Date()

        alert(now.toLocaleTimeString())
    }
    return (
        <div>
            <Hello/>
            <Hello/>
            <Hello/>
            <Message/>
            <Welcome name="Denise" age={24}/>
            <AlertClock onClick={handleShowTime}/>
            <Counter/>
            <Clock/>
            <MouseClicker/>
            <MyForm/>
        </div>
    )
}