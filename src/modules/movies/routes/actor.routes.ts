import { Router } from 'express'
import ActorController from '../controllers/actor-controller'

const actorRouter = Router()
const actorController = new ActorController()

actorRouter.post('/', actorController.create)

export default actorRouter
