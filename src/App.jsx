import { Container } from "./Container";
import { MyUncontrolledForm } from "./MyUncontrolledForm";
import { Welcome } from "./Welcome";
import { Route, Routes } from "react-router-dom";

export function App(){
    return (
    <Container title="My Awesome App">
        <Routes>
            <Route path="/" element={<Welcome age="24"/>} />
            <Route path="/:name" element={<Welcome age="24"/>} />
            <Route path="form" element={<MyUncontrolledForm />} />
        </Routes>
    </Container>        
    )
}


//a Routes component is something that is getting imported from react router dom

//al my application is now a descendat of the language-context provider. We can hold any value within a provider. 
    //We always need to pass a value to the value prop of a provider (the default value will be used another way)