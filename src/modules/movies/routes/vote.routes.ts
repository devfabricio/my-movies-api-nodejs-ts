import { Router } from 'express'
import VoteController from '../controllers/vote-controller'

const voteRouter = Router()
const voteController = new VoteController()

voteRouter.post('/', voteController.create)

export default voteRouter
