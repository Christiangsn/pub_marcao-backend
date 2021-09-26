import { Schema, model } from 'mongoose'
import IClient from '../interface/IClient'

const ClientSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    document: {
      required: true,
      type: String
    },
    lasteName: {
      type: String,
      required: false
    },
    adress: {
      type: String,
      required: false
    },
    surname: {
      type: String,
      required: false
    }
  }, {
    timestamps: true
  }
)

export default model<IClient>('Client', ClientSchema)
