import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes.tsx'

import '@fontsource-variable/epilogue/wght-italic.css'
import '@fontsource-variable/inter/slnt.css'

import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>,
)
