import { Router } from 'express'
import DirectorController from '../controllers/director-controller'
import { isAuth } from '../../../shared/main/middlewares/is-auth'
import {isAdmin} from "../../../shared/main/middlewares/is-admin";

const directorRouter = Router()
const directorController = new DirectorController()

directorRouter.get('/', directorController.index)
directorRouter.post('/', isAuth, isAdmin, directorController.create)

export default directorRouter
