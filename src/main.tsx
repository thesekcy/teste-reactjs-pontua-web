import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes.tsx'
import { inject } from '@vercel/analytics'

import '@fontsource-variable/epilogue/wght.css'
import '@fontsource-variable/inter/slnt.css'

import './styles/global.scss'
import { AuthProvider } from './contexts/auth/authProvider.tsx'

inject()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </React.StrictMode>
)
