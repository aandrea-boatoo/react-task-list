import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tasks.css'
import App from './tasks'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
