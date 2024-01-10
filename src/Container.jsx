import { useState } from "react"

export function Container({ title, children }){
    const [collapsed, setCollapsed] = useState(false)

    function handleToggleCollapse() {
        setCollapsed( t => !t)
    }

    return (
        <div className="app">
            <div className="title">{title} <button onClick={handleToggleCollapse}>Toggle</button></div>
            {!collapsed && <div className="app-content">{children}</div>}
            </div>
    )
}


//Now React sets the value of the children prop to whatever is passed between the opening tag and the closing tag of any component.