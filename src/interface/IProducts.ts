import { Document } from 'mongoose'

export default interface IProducts extends Document {
    description: string,
    productType: string,
    price: number
}
