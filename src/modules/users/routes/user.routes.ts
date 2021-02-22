import { Router } from 'express'
import { UserController } from '../controllers/user-controller'
import { UserActivationController } from '../controllers/user-activation-controller'
import { UserRoleController } from '../controllers/user-role-controller'
import { isAuth } from '../../../shared/main/middlewares/is-auth'
import { isAdmin } from '../../../shared/main/middlewares/is-admin'

const userRouter = Router()
const userController = new UserController()
const userActivationController = new UserActivationController()
const userRoleController = new UserRoleController()

userRouter.post('/', userController.create)
userRouter.put('/', isAuth, userController.update)
userRouter.put('/activation', isAuth, isAdmin, userActivationController.update)
userRouter.put('/role', isAuth, isAdmin, userRoleController.update)

export default userRouter
