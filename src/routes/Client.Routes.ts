import Router, { Request, Response } from 'express'
import ClientController from '../controllers/Client.Controller'

const router = Router()

const clientController = new ClientController()

router.post('/client/create', (req: Request, res: Response) => clientController.store(req, res))
router.get('/clients', (req: Request, res: Response) => clientController.index(req, res))

export default router
