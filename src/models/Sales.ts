import { Schema, model } from 'mongoose'
import ISales from '../interface/ISales'

const SaleSchema = new Schema(
  {
    clientId: {
      type: Schema.Types.ObjectId,
      ref: 'Client'
    },
    paymentId: {
      type: Schema.Types.ObjectId,
      ref: 'Payment'
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Products'
    },
    price: {
      type: Number
    }
  }, {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
)

export default model<ISales>('Sales', SaleSchema)
