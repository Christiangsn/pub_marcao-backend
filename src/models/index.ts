import { Model } from 'mongoose'
import User from './User'
import Token from './Tokens'

type ModelName = 'User' | 'Token'

const db: Record<ModelName, Model<any, any, any>> = {
  User, Token
}

export default db
