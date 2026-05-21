import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Mainapp from './Mainapp.jsx'
import './index.css'
//import App from './App.jsx'
import Myapp from './Myapp.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Myapp /> */}
    <Mainapp/>
  </StrictMode>,
)

