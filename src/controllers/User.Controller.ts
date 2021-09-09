import { Request, Response } from 'express'
import { UserServices } from '../services/User.Services'
import bcrypt from 'bcrypt'
import { authConfig } from '../config/AuthConfig'

class UserController {
  // public userServices;

  // constructor () {
  //   this.userServices = new UserServices()
  // }

  public async store (req: Request, res: Response): Promise<Response> {
    const password = bcrypt.hashSync(req.body.password, authConfig.rounds)
    const { name, type } = req.body

    const userServices = new UserServices()
    try {
      const newUser = await userServices.store({ name: name, email: req.body.email, type, password })
      return res.json(newUser)
    } catch (error: any) {
      return res.status(error.status || 400).json({ error: { message: error.message || 'Ocorreu um erro inesperado', status: error.status || 400 } })
    }
  }

  public async authenticate (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
    const userServices = new UserServices()

    try {
      const authentication = await userServices.authenticate({ email, password })
      return res.json(authentication)
    } catch (error: any) {
      return res.status(error.status || 400).json({ error: { message: error.message || 'Ocorreu um erro inesperado', status: error.status || 400 } })
    }
  }
}

export default UserController
