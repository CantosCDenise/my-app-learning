import { Age } from "./Age";
import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClicker";
import { MyForm } from "./MyForm";
import { MyList } from "./MyList";
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
            <MyList items={[
                { id: 1, name: 'Jane', age: 20},
                { id: 2, name: 'John', age: 23},
                { id: 3, name: 'Billy', age: 40},
                { id: 4, name: 'Kate', age: 26},
                { id: 5, name: 'Jane', age: 30},
            ]}/>
        </div>
    )
}