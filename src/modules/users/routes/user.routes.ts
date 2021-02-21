import { Router } from 'express'
import { UserController } from '../controllers/user-controller'
import { UserActivationController } from '../controllers/user-activation-controller'

const userRouter = Router()
const userController = new UserController()
const userActivationController = new UserActivationController()

userRouter.post('/', userController.create)
userRouter.put('/', userController.update)
userRouter.put('/activation', userActivationController.update)

export default userRouter
