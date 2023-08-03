import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import routesConfig from './routesConfig'
import PrivateTemplate from './components/privateTemplate/index'
import { SearchBarProvider } from './contexts/searchBar/searchBarProvider'
import { AuthContext } from './contexts/auth/authContext'
import SpinnerLoading from './components/spinnerLoading'

interface routesConfigProps {
  path: string;
  requiresAuth: boolean;
  component: React.FC;
  usePrivateTemplate?: boolean;
}

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext)

  if (isAuthenticated === null) {
    return <SpinnerLoading />
  }

  return (
    <Router>
      <Routes>
        {routesConfig.map((route: routesConfigProps) => {
          const { path, requiresAuth, usePrivateTemplate } = route
          const isAuthRequired = requiresAuth
          const isUserAuthenticated = isAuthenticated
          const shouldUsePrivateTemplate = usePrivateTemplate !== false

          if (isAuthRequired && !isUserAuthenticated) {
            return (
              <Route
                key={path}
                path={path}
                element={<Navigate to="/login" replace />}
              />
            )
          }

          if (!isAuthRequired && isUserAuthenticated) {
            return (
              <Route
                key={path}
                path={path}
                element={<Navigate to="/" replace />}
              />
            )
          }

          if (!isAuthRequired && !isUserAuthenticated) {
            return (
              <Route key={path} path={path} element={<route.component />} />
            )
          }

          return (
            <Route
              key={path}
              path={path}
              element={
                shouldUsePrivateTemplate ? (
                  <SearchBarProvider>
                    <PrivateTemplate>
                      <route.component />
                    </PrivateTemplate>
                  </SearchBarProvider>
                ) : (
                  <route.component />
                )
              }
            />
          )
        })}
      </Routes>
    </Router>
  )
}

export default AppRoutes
