import Router from 'express'
import UserController from '../controllers/User.Controller'
import AuthMiddleware from '../middlewares/Auth'
const router = Router()

const userController = new UserController()

router.post('/login', userController.authenticate)

router.use(AuthMiddleware)
router.post('/create', userController.store)

export default router
