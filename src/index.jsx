import { createRoot} from 'react-dom/client'
import { App } from './App'
import { StrictMode } from 'react'

import './index.scss' 

  createRoot(document.getElementById("root")).render(
  <StrictMode>
  <App/>
  </StrictMode>
 )

// const root = document.querySelector('#root')

// ReactDOM.render(<App />, root)

