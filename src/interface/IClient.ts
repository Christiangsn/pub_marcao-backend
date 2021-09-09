import { Document } from 'mongoose'

export default interface IClient extends Document {
    name?: String,
    type: String,
    email: String,
    password: String
}
