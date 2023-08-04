/* eslint-disable @typescript-eslint/no-unused-vars */
import fakeDb from '../fake_db.json'

export const useMockUserApi = () => ({
  findUserByEmail: async (email: string) => {
    return fakeDb.users.find((user) => user.email === email)
  },
  sendRecoveryPassword: async (_email: string) => {

    return {
      data: {
        message: true // Change to false to view the toast message error
      }
    }
  }
})
