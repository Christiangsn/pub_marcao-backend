import { sign } from 'jsonwebtoken'
import { authConfig } from '../config/AuthConfig'
import IUser from '../dtos/IUser'

export async function genetarionToken (user: IUser): Promise<string> {
  const token = sign({}, authConfig.secret, {
    subject: user.id,
    expiresIn: 86400
  })
  return token
}
