import Router, { Request, Response } from 'express'
import { UserController } from '../controllers/User.Controller'
import ClientController from '../controllers/Client.Controller'
import AuthMiddleware from '../middlewares/Auth'
const router = Router()

const userController = new UserController()
const clientController = new ClientController()

router.post('/login', (req: Request, res: Response) => userController.authenticate(req, res))

router.use(AuthMiddleware)
router.get('/isAuthenticattion?', (req: Request, res: Response) => userController.verify(req, res))
router.post('/create', (req: Request, res: Response) => userController.store(req, res))
router.post('/create/client', clientController.store)

export default router
