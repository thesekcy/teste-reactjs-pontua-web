import Dashboard from './pages/private/Dashboard'
import Profile from './pages/private/Profile'
import Login from './pages/public/Login'
import PasswordRecovery from './pages/public/PasswordRecovery'

const routesConfig = [
  {
    path: '/login',
    component: Login,
    requiresAuth: false
  },
  {
    path: '/password_recovery',
    component: PasswordRecovery,
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
    path: '/profile/:id',
    component: Profile,
    requiresAuth: true
  },
]

export default routesConfig
