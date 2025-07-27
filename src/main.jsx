import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './meme_gen/index.css'
import {Page} from './meme_gen/meme_gen'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
