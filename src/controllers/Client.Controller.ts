import { Request, Response } from 'express'
import { ClientServices } from '../services/client.services'

class ClientController {
  private clientService

  constructor () {
    this.clientService = new ClientServices()
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const data = {
      name: req.body.name,
      document: req.body.name,
      adress: req.body.adress,
      surname: req.body.name
    }
    const idUser = req.idToken

    try {
      const newClient = await this.clientService.store({ data, idUser })
      return res.status(201).send(newClient)
    } catch (error: any) {
      return res.status(error.status || 400).json({ error: { message: error.message || 'Ocorreu um erro inesperado', status: error.status || 400 } })
    }
  }

  public async index (req: Request, res: Response): Promise<Response> {
    console.log('entrou')
    try {
      const clients = await this.clientService.index()
      console.log('foi aqui')
      return res.json(clients)
    } catch (error: any) {
      return res.status(error.status || 400).json({ error: { message: error.message || 'Ocorreu um erro inesperado', status: error.status || 400 } })
    }
  }
}

export default ClientController
