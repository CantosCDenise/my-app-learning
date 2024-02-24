import { Link, Outlet } from "react-router-dom";

export function Catalogue() {
    return (
        <div>
            <h2>All products</h2>

            <ul>
                <li><Link to="/products/1">Product 1</Link></li>
                <li><Link to="/products/2">Product 2</Link></li>
                <li><Link to="/products/3">Product 3</Link></li>
                <li><Link to="/products/4">Product 4</Link></li>
                <li><Link to="/products/5">Product 5</Link></li>
            </ul>

            <hr />

            <Outlet />
        </div>
    )
}

//you can use the outlet component to render another component within a routes component
//and the component that it's getting rendered in place of the outlet is the one that 
//it's passed as the element of the nested roots of the main root.

