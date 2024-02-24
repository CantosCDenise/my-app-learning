import { Catalogue } from "./Catalogue";
import { Container } from "./Container";
import { Product } from "./Product";
import { Welcome } from "./Welcome";
import { Link, Route, Routes } from "react-router-dom";

export function App(){
    return (
    <Container title={<div>
        <h1>My Awesome App</h1>
        <div>
            <Link to="/">Home</Link> | <Link to="products">Products</Link>
        </div>
    </div>}>
        <Routes>
            <Route path="/" element={<Welcome age="24"/>} />
            <Route path="products" element={<Catalogue />}>
                <Route index element={<p>Please select a product</p>}/>
                <Route path=":id" element={<Product />} />
            </Route>
            <Route path="*" element={<div><p>Not Found</p>
                <Link to="/">Go Home</Link>
                </div>}/>
        </Routes>
    </Container>        
    )
}


//a Routes component is something that is getting imported from react router dom

//al my application is now a descendat of the language-context provider. We can hold any value within a provider. 
    //We always need to pass a value to the value prop of a provider (the default value will be used another way)

//I can decide to show something whenever no parameter is passed to the product's root by using an index root.
//If I only put index without specifying a value is the same as true