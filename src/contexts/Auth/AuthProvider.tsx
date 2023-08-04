import { AuthContext } from './authContext'
import { useEffect, useState } from 'react'
import { IUser } from '../../types'
import {
  generateToken,
  checkAuthentication,
  decodeToken,
} from '../../utils/authUtils'
import bcrypt from 'bcryptjs'
import { useMockUserApi } from '../../hooks/useMockUserApi'

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser | undefined | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<null | boolean>(null)
  const MockUserApi = useMockUserApi()

  useEffect(() => {
    async function checkAuth() {
      const token = localStorage.getItem('jwtToken')

      if (token) {
        const isAuthenticated = checkAuthentication(token)
        const email = decodeToken(token).email
        const foundUser = await MockUserApi.findUserByEmail(email)
        setUser(foundUser)
        setIsAuthenticated(isAuthenticated)
      } else {
        setIsAuthenticated(false)
      }
    }

    checkAuth()
  }, [MockUserApi])


  const signIn = async (email: string, password: string) => {
    try {
      const foundUser = await MockUserApi.findUserByEmail(email)

      if (!foundUser) {
        return false
      }

      const isMatch = await bcrypt.compare(password, foundUser.password)

      if (isMatch) {
        const expirationTime = Date.now() + 3600 * 1000 // 1 hora
        const token = generateToken({ email, expirationTime })
        setUser(foundUser)
        localStorage.setItem('jwtToken', token)
        setIsAuthenticated(true)
        return true
      } else {
        return false
      }
    } catch (error) {
      console.error('Erro durante a autenticação:', error)
      return false
    }
  }

  const signOut = async () => {
    localStorage.removeItem('jwtToken')
    setIsAuthenticated(false)
  }

  const recoveryPassword = async (email: string) => {
    const { data } = await MockUserApi.sendRecoveryPassword(email)

    if (data.message === true) {
      return true
    } else {
      return false
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, isAuthenticated, recoveryPassword }}
    >
      {children}
    </AuthContext.Provider>
  )
}
