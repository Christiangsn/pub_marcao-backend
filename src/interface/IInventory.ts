import { Document } from 'mongoose'

export default interface IInventory extends Document {
    local: string,
    description: string,
}
