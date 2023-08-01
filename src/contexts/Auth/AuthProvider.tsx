import { AuthContext } from './AuthContext'
import { useEffect, useState } from 'react'
import { IUser } from '../../types'
import { generateToken, checkAuthentication } from '../../utils/AuthUtils'
import bcrypt from 'bcryptjs'
import fakeDb from '../../fake_db.json'

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser | 'unauthorized' | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('jwtToken')

    if (token) {
      const isAuthenticated = checkAuthentication(token)
      setIsAuthenticated(isAuthenticated)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  const findUser = (email: string) => {
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
