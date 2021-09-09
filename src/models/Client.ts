import { Schema, model } from 'mongoose'
import IClient from '../interface/IClient'

const ClientSchema = new Schema(
  {
    name: String,
    document: String
  }, {
    timestamps: true
  }
)

export default model<IClient>('Client', ClientSchema)
