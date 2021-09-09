import { Document } from 'mongoose'

export default interface ISales extends Document {
    clientId: number,
    paymentId: number,
    productId: number,
    price: number
}
