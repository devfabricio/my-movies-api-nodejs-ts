import { Router } from 'express'
import { UserController } from '../controllers/user-controller'
import { UserActivationController } from '../controllers/user-activation-controller'
import { UserRoleController } from '../controllers/user-role-controller'

const userRouter = Router()
const userController = new UserController()
const userActivationController = new UserActivationController()
const userRoleController = new UserRoleController()

userRouter.post('/', userController.create)
userRouter.put('/', userController.update)
userRouter.put('/activation', userActivationController.update)
userRouter.put('/role', userRoleController.update)

export default userRouter
