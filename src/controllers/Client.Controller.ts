import { Request, Response } from 'express'
import { ClientServices } from '../services/client.services'

class ClientController {
  public async store (req: Request, res: Response): Promise<Response> {
    const { name, document } = req.body
    const clientService = new ClientServices()

    try {
      const newClient = await clientService.store({ name, document })
      return res.send(newClient)
    } catch (error: any) {
      return res.status(error.status || 400).json({ error: { message: error.message || 'Ocorreu um erro inesperado', status: error.status || 400 } })
    }
  }

  // public async get (req: Request, res: Response): Promise<Response> {
  //   const { name, document } = req.body
  //   const objectUpdated = { name: String(name), document: String(document) }
  //   const clientService = new ClientServices()
  //   try {
  //     const editClient = await clientService.update(objectUpdated)
  //     return res.send(editClient)
  //   } catch (error: any) {
  //     return res.status(error.status || 400).json({ error: { message: error.message || 'Ocorreu um erro inesperado', status: error.status || 400 } })
  //   }
  // }
}

export default ClientController
