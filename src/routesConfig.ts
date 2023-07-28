import Dashboard from './pages/private/Dashboard'
import Profile from './pages/private/Profile'
import Login from './pages/public/Login'

const routesConfig = [
  {
    path: '/login',
    component: Login,
    requiresAuth: false
  },
  {
    path: '/',
    component: Dashboard,
    requiresAuth: true
  },
  {
    path: '/dashboard',
    component: Dashboard,
    requiresAuth: true
  },
  {
    path: '/profile',
    component: Profile,
    requiresAuth: true
  },
]

export default routesConfig
