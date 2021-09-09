import { Schema, model } from 'mongoose'
import IInventory from '../interface/IInventory'

const InventorySchema = new Schema(
  {
    local: {
      type: String
    },
    description: {
      type: String
    }
  }, {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
)

export default model<IInventory>('Payment', InventorySchema)
