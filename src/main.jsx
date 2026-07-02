import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
