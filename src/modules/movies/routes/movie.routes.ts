import { Router } from 'express'
import MovieController from '../controllers/movie-controller'
import { isAuth } from '../../../shared/main/middlewares/is-auth'
import { isAdmin } from '../../../shared/main/middlewares/is-admin'

const movieRouter = Router()
const movieController = new MovieController()

movieRouter.post('/', isAuth, isAdmin, movieController.create)
movieRouter.get('/:id', movieController.show)
movieRouter.get('/', movieController.index)

export default movieRouter
