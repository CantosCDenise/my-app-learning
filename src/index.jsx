import { createRoot} from 'react-dom/client'
import { Hello } from './Hello'
import { App } from './App'
import { StrictMode } from 'react'

createRoot(document.getElementById("root")).render(
<StrictMode>
<App/>
</StrictMode>
)