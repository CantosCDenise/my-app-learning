import { Age } from "./Age";
import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClicker";
import { MyForm } from "./MyForm";
import { MyList } from "./MyList";
import { MyUncontrolledForm } from "./MyUncontrolledForm";
import { Welcome } from "./Welcome";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";
import { FormCheck } from "./Checkpoint/FormCheck";
import { Toggle } from "./Checkpoint/Toggle";
import { TodoList } from "./TodoList";
import { GithubUser } from "./GithubUser";
import { HookCounter } from "./HookCounter";
import { useCounter } from "./UseCounter";

export function App(){
    function handleShowTime(){
        const now = new Date()

        alert(now.toLocaleTimeString())
    }

    const [language, setLanguage] = useState("en")

    function handleSetLanguage(language){
        setLanguage(language)
    }

    const {counter, onIncrement} = useCounter()
    const [username, setUsername] = useState("")
    return (
    <div>
        <button onClick={() => handleSetLanguage("it")}>IT</button>
        <button onClick={() => handleSetLanguage("en")} >EN</button>

        <Container title={<h1>My Awesome App</h1>}>
            <LanguageContext.Provider value={language}>
            <Hello/>
            <Hello/>
            <Hello/>
            <input value={username} onChange={(e) => setUsername(e.target.value)}/>
            <GithubUser username="cantoscdenise"/>
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
            <Toggle/>
            <FormCheck/>
            <TodoList/>
            </LanguageContext.Provider>
            <HookCounter/>
            <button onClick={onIncrement}>{counter}</button>
        </Container>
    </div>
    )
}


//al my application is now a descendat of the language-context provider. We can hold any value within a provider. 
    //We always need to pass a value to the value prop of a provider (the default value will be used another way)