import { Request, Response } from 'express'
import { UserServices } from '../services/User.Services'

class UserController {
  private userServices: UserServices

  constructor () {
    this.userServices = new UserServices()
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const { name, type, password } = req.body

    try {
      const newUser = await this.userServices.store({ name: name, email: req.body.email, type, password })
      return res.json(newUser)
    } catch (error: any) {
      return res.status(error.status || 400).json({ error: { message: error.message || 'Ocorreu um erro inesperado', status: error.status || 400 } })
    }
  }

  /// Autenticar um usuário
  public async authenticate (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    try {
      const authentication = await this.userServices.authenticate({ email, password })
      return res.json(authentication)
    } catch (error: any) {
      return res.status(error.status || 400).json({ error: { message: error.message || 'Ocorreu um erro inesperado', status: error.status || 400 } })
    }
  }

  // Resposta para verificar e devolver os dados do usuário logado
  public async verify (req: Request, res: Response): Promise<Response> {
    const idToken = req.idToken

    try {
      const authentication = await this.userServices.verify(idToken)
      return res.json(authentication)
    } catch (error: any) {
      return res.status(error.status || 400).json({ error: { message: error.message || 'Ocorreu um erro inesperado', status: error.status || 400 } })
    }
  }
}

export { UserController }
