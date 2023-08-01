import jwt_decode from 'jwt-decode'

export interface IDecodedToken {
    expirationTime: number;
    email: string;
}

interface ITokenPayload {
    email: string;
    expirationTime: number;
}

const jwtSecret = import.meta.env.VITE_JWT_SECRET

export const generateToken = (payload: ITokenPayload): string => {
  const header = btoa(JSON.stringify({ typ: 'JWT', alg: 'HS256' }))
  const data = btoa(JSON.stringify(payload))
  const signature = btoa(header + '.' + data + '.' + jwtSecret)
  return `${header}.${data}.${signature}`
}

export const checkAuthentication = (token: string): boolean => {
  if (!token) {
    return false
  }

  try {
    const decodedToken = jwt_decode(token) as IDecodedToken
    return decodedToken.expirationTime > Date.now()
  } catch (error) {
    console.error('Erro ao decodificar o token JWT:', error)
    return false
  }
}