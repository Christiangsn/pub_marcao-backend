import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'
import IUser from '../interface/Iuser'
import { paramsConfig } from '../config/ParamsConfig'

const UserSchema = new Schema(
  {
    name: String,
    type: String,
    email: String,
    password: String,
    tokenUserId: {
      type: Schema.Types.ObjectId,
      ref: 'Token',
      select: false
    }
  }, {
    timestamps: true
  }
)

UserSchema.pre<IUser>('save', function (next) {
  const user = this
  if (!user.isModified('password')) {
    return next()
  }

  bcrypt.genSalt(paramsConfig.salt, (err, salt) => {
    if (err) {
      return next(err)
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})

export default model<IUser>('User', UserSchema)
