import { Router } from 'express'
import MovieController from '../controllers/movie-controller'

const movieRouter = Router()
const movieController = new MovieController()

movieRouter.post('/', movieController.create)

export default movieRouter
