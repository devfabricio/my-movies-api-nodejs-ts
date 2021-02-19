import { Router } from 'express'
import userRouter from '../../modules/users/routes/user.routes'

const routes = Router()

routes.use('/user', userRouter)

export default routes
