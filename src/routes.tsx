import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import routesConfig from './routesConfig'
import PrivateTemplate from './components/PrivateTemplate/index'
import { SearchBarProvider } from './contexts/searchBar/searchBarProvider'
import { AuthContext } from './contexts/auth/authContext'

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <Router>
      <Routes>
        {routesConfig.map((route) => {
          const { path, requiresAuth } = route
          const isAuthRequired = requiresAuth
          const isUserAuthenticated = isAuthenticated

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
                element={<Navigate to="/dashboard" replace />}
              />
            )
          }

          return (
            <Route
              key={path}
              path={path}
              element={
                isAuthRequired ? (
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
