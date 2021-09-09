import { Document } from 'mongoose'

export default interface IToken extends Document {
    passwordResetToken: string,
    passwordResetExpires: string,
    tokenUserId: number,
}
