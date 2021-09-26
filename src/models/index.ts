import { Model } from 'mongoose'
import User from './User'
import Token from './Tokens'
import Client from './Client'
import LogsClients from './LogsClients'

type ModelName = 'User' | 'Token' | 'Client' | 'LogsClients'

const db: Record<ModelName, Model<any, any, any>> = {
  User, Token, Client, LogsClients
}

export default db
