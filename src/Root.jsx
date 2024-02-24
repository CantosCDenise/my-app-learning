import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

export function Root() {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}

//We wrap our application’s root component in the browserrouter component 
//which will allow all components within our App component to use React Router’s features.
