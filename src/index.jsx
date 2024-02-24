import { createRoot} from 'react-dom/client'
import { App } from './App'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom';

import './index.scss' 
import { Root } from './Root'

//   createRoot(document.getElementById("root")).render(
//   <StrictMode>
//   <App/>
//   </StrictMode>
//  )

const root = document.querySelector('#root')

ReactDOM.render(<Root />, root)

