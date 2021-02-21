import { Router } from 'express'
import { AuthenticationController } from '../controllers/authentication-controller'

const authenticationRouter = Router()
const authenticationController = new AuthenticationController()

authenticationRouter.post('/', authenticationController.create)

export default authenticationRouter
