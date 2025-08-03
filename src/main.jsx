import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './social-media-dashboard/Main.css'
import {Page} from './social-media-dashboard/Main'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
