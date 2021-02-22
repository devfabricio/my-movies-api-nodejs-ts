import { Router } from 'express'
import ActorController from '../controllers/actor-controller'
import { isAuth } from '../../../shared/main/middlewares/is-auth'
import { isAdmin } from '../../../shared/main/middlewares/is-admin'

const actorRouter = Router()
const actorController = new ActorController()

actorRouter.get('/', actorController.index)
actorRouter.post('/', isAuth, isAdmin, actorController.create)

export default actorRouter
