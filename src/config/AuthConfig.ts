import IAuth from '../dtos/IAuth'
import dotenv from 'dotenv'
dotenv.config()

const authConfig: IAuth = {
  secret: process.env.AUTH_SECRET!,
  expires: process.env.AUTH_EXPIRES!,
  rounds: Number(process.env.AUTH_ROUNDS)!
}

export { authConfig }
