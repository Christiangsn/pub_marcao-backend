import { Model } from 'mongoose'
import User from './User'
import Token from './Tokens'
import Client from './Client'

type ModelName = 'User' | 'Token' | 'Client'

const db: Record<ModelName, Model<any, any, any>> = {
  User, Token, Client
}

export default db
