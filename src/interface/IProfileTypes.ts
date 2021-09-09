import { Document } from 'mongoose'

export default interface IProfileTypes extends Document {
    type: number,
    feature: string,
}
