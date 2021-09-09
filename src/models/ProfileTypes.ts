import { Schema, model } from 'mongoose'
import IProfileTypes from '../interface/IProfileTypes'

const ProfileTypesSchema = new Schema(
  {
    type: {
      type: Number
    },
    feature: {
      type: String
    }
  }, {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
)

export default model<IProfileTypes>('ProfileTypes', ProfileTypesSchema)
