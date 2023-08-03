import Dashboard from './pages/private/dashboard'
import Profile from './pages/private/profile'
import SelectAgent from './pages/private/selectAgent'
import Login from './pages/public/login'
import PasswordRecovery from './pages/public/passwordRecovery'

const routesConfig = [
  {
    path: '/login',
    component: Login,
    requiresAuth: false
  },
  {
    path: '/password-recovery',
    component: PasswordRecovery,
    requiresAuth: false
  },

  {
    path: '/',
    component: Dashboard,
    requiresAuth: true
  },
  {
    path: '/profile',
    component: SelectAgent,
    requiresAuth: true,
    usePrivateTemplate: false
  },
  {
    path: '/profile/:id',
    component: Profile,
    requiresAuth: true
  },
]

export default routesConfig
