import { Document } from 'mongoose'

export default interface IUser extends Document {
    name: string,
    type: string,
    email: string,
    password: string,
    document: String
}
