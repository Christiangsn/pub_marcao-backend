import { Services } from './Services'
import bcrypt from 'bcryptjs'
import { genetarionToken } from '../config/AuthToken'
import IUser from '../dtos/IUser'
import ISigIn from '../dtos/ISigIn'
import Errors from '../errors/Exception'

class UserServices extends Services {
  public TokenGeneration

  constructor () {
    super('User')
    this.TokenGeneration = new Services<T>('Token')
  }

  public async store ({ name, email, type, password }: IUser): Promise<string> {
    const verifyUser = await super.show({ email })

    if (verifyUser) {
      throw Errors.BadRequestException('Usuario ja cadastrado')
    }

    await super.store({ name, email, type, password })

    return 'Registro feito com sucesso'
  }

  public async authenticate ({ password, email }: ISigIn) {
    const verifyUser = await super.show({ email })
    if (!verifyUser) {
      throw Errors.BadRequestException('Usuário ou senha incorreto!')
    }

    // if (!await bcrypt.compare(password, verifyUser.password)) {
    //   throw Errors.BadRequestException('Usuário ou senha incorreto!')
    // }

    const token = await genetarionToken(verifyUser)
    const userToken = {
      passwordResetToken: token,
      passwordResetExpires: new Date(),
      tokenUserId: verifyUser.id
    }
    const tokenUserId = verifyUser.id

    const verifyToken = await this.TokenGeneration.show(tokenUserId)

    if (!verifyToken) {
      const tokenGeneration = await this.TokenGeneration.store(userToken)
      await super.update({ id: verifyUser.id, tokenUserId: tokenGeneration.id })
    }

    const tokenGeneration = await this.TokenGeneration.update({
      id: verifyToken.id,
      passwordResetToken: token
    })
    await super.update({ id: verifyUser.id, tokenUserId: tokenGeneration.id })

    return { token }
  }
}

export { UserServices }
