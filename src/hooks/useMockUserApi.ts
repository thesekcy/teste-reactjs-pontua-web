/* eslint-disable @typescript-eslint/no-unused-vars */
import fakeDb from '../fake_db.json'

export const useMockUserApi = () => ({
  findUserByEmail: async (email: string) => {
    return fakeDb.users.find((user) => user.email === email)
  },
  sendRecoveryPassword: async (email: string) => {
    const foundUser = await fakeDb.users.find((user) => user.email === email)
    if (foundUser) {
      return {
        data: {
          message: true
        }
      }
    } else {
      return {
        data: {
          message: false
        }
      }
    }
  }
})
