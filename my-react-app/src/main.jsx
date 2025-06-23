import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './page/Home'
import Add from './page/Add'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Add />
  </StrictMode>,
)
