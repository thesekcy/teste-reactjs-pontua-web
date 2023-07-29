import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import routesConfig from './routesConfig'

import PrivateTemplate from './components/privateTemplate/index'
import { SearchBarProvider } from './contexts/searchBar/searchBarProvider'

const AppRoutes = () => {
  const isAuthenticated = true

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
