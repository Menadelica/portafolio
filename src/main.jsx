import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { Rutas } from './components/routes/Rutas/Rutas'
import { BrowserRouter } from 'react-router-dom'
import { Experiencia } from './components/pages/Experiencia/Experiencia'
import { Home } from './components/pages/Home/Home'
import { Historia } from './components/pages/Historia/Historia'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Rutas></Rutas>
    </BrowserRouter>

  </StrictMode>
)


