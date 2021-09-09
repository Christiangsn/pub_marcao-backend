import { Schema, model } from 'mongoose'
import IPayment from '../interface/IPayment'

const PaymentSchema = new Schema(
  {
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

export default model<IPayment>('Payment', PaymentSchema)
