import { Schema, model } from 'mongoose'
import IToken from '../interface/IToken'

const TokenSchema = new Schema(
  {
    passwordResetToken: {
      type: String,
      select: false
    },
    passwordResetExpires: {
      type: Date,
      select: false
    },
    tokenUserId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      select: false
    }
  }, {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
)

export default model<IToken>('Token', TokenSchema)
