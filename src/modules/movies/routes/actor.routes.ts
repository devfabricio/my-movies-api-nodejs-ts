import { Router } from 'express'
import ActorController from '../controllers/actor-controller'

const actorRouter = Router()
const actorController = new ActorController()

actorRouter.get('/', actorController.index)
actorRouter.post('/', actorController.create)

export default actorRouter
