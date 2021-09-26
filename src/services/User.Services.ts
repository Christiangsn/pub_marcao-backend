import { Services } from './Services'
import { genetarionToken } from '../config/AuthToken'
import bcrypt from 'bcrypt'
import IUser from '../dtos/IUser'
import ISigIn from '../dtos/ISigIn'
import Errors from '../errors/Exception'

export class UserServices extends Services {
  public TokenGeneration

  constructor () {
    super('User')
    this.TokenGeneration = new Services('Token')
  }

  public async store ({ name, email, type, password }: IUser): Promise<string> {
    const verifyUser = await super.show({ email })

    if (verifyUser) {
      throw Errors.BadRequestException('Usuario ja cadastrado')
    }

    await super.store({ name, email, type, password })

    return 'Registro feito com sucesso'
  }

  public async authenticate ({ password, email }: ISigIn): Promise<object> {
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

    const verifyToken = await this.TokenGeneration.show({ tokenUserId: tokenUserId })

    if (!verifyToken) {
      const tokenGeneration = await this.TokenGeneration.store(userToken)
      await super.update(verifyUser.id, tokenGeneration.id)
    }

    const tokenGeneration = await this.TokenGeneration.update(verifyToken.id, { passwordResetToken: token })
    await super.update(verifyUser.id, { tokenUserId: tokenGeneration.id })

    const user = {
      name: verifyUser.name
    }

    return { user, token: token }
  }

  public async verify (idToken: string): Promise<Object> {
    const userData = await super.show({ _id: idToken })

    const user = {
      name: userData.name,
      type: userData.type
    }

    return user
  }
}
