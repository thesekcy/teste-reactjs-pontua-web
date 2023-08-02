import Dashboard from './pages/private/dashboard'
import Profile from './pages/private/profile'
import Login from './pages/public/login'
import PasswordRecovery from './pages/public/passwordRecovery'

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
