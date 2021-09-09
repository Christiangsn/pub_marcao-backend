import { Document } from 'mongoose'

export default interface IPayment extends Document {
    description: number,
}
