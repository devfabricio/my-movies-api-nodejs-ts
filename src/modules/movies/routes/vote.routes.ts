import { Router } from 'express'
import VoteController from '../controllers/vote-controller'
import { isAuth } from '../../../shared/main/middlewares/is-auth'
import { isDefaultUser } from '../../../shared/main/middlewares/is-default-user'

const voteRouter = Router()
const voteController = new VoteController()

voteRouter.post('/', isAuth, isDefaultUser, voteController.create)

export default voteRouter
