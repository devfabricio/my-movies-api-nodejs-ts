import { Router } from 'express'
import MovieController from '../controllers/movie-controller'
import { isAuth } from '../../../shared/middlewares/is-auth'

const movieRouter = Router()
const movieController = new MovieController()

movieRouter.post('/', isAuth, movieController.create)
movieRouter.get('/', movieController.index)

export default movieRouter
