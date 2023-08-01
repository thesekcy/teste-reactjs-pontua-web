import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import routesConfig from './routesConfig'

import PrivateTemplate from './components/PrivateTemplate/index'
import { SearchBarProvider } from './contexts/searchBar/searchBarProvider'
import { useContext } from 'react'
import { AuthContext } from './contexts/Auth/AuthContext'

const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext)
  console.log(isAuthenticated)

  return (
    <Router>
      <Routes>
        {routesConfig.map((route) => (


          <Route
            key={route.path}
            path={route.path}
            element={
              route.requiresAuth ? (
                isAuthenticated ? (
                  <SearchBarProvider>
                    <PrivateTemplate>
                      <route.component />
                    </PrivateTemplate>
                  </SearchBarProvider>
                ) : (
                  <Navigate to="/login" replace />
                )
              ) : isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <route.component />
              )
            }
          />
        ))}
      </Routes>
    </Router>
  )
}

export default AppRoutes
