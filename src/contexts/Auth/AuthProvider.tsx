import { AuthContext } from './authContext'
import { useEffect, useState } from 'react'
import { IUser } from '../../types'
import {
  generateToken,
  checkAuthentication,
  decodeToken,
} from '../../utils/authUtils'
import bcrypt from 'bcryptjs'
import fakeDb from '../../fake_db.json'

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser | undefined | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<null | boolean>(null)

  useEffect(() => {
    function checkAuth() {
      const token = localStorage.getItem('jwtToken')

      if (token) {
        const isAuthenticated = checkAuthentication(token)
        const email = decodeToken(token).email
        setUser(findUser(email))
        setIsAuthenticated(isAuthenticated)
      } else {
        setIsAuthenticated(false)
      }
    }

    checkAuth()
  }, [])

  const findUser = (email: string): IUser | undefined => {
    return fakeDb.users.find((user) => user.email === email)
  }

  const signIn = async (email: string, password: string) => {
    try {
      const foundUser = findUser(email)

      if (!foundUser) {
        throw new Error('Email não cadastrado.')
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
        alert('As senhas não correspondem!')
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

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
