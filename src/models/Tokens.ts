import { Schema, model } from 'mongoose'
import IToken from '../interface/IToken'

const TokenSchema = new Schema(
  {
    passwordResetToken: {
      type: String,
      select: false,
      required: true
    },
    passwordResetExpires: {
      type: Date,
      select: false,
      required: true
    },
    tokenUserId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      select: false,
      required: true
    }
  }, {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
)

export default model<IToken>('Token', TokenSchema)
