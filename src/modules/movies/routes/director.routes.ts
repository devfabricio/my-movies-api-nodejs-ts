import { Router } from 'express'
import DirectorController from '../controllers/director-controller'

const directorRouter = Router()
const directorController = new DirectorController()

directorRouter.post('/', directorController.create)

export default directorRouter
