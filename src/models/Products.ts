import { Schema, model } from 'mongoose'
import IProducts from '../interface/IProducts'

const ProductsSchema = new Schema(
  {
    description: {
      type: String
    },
    productType: {
      type: String
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

export default model<IProducts>('Procuts', ProductsSchema)
