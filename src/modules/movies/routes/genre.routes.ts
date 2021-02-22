import { Router } from 'express'
import GenreController from '../controllers/genre-controller'

const genreRouter = Router()
const genreController = new GenreController()

genreRouter.get('/', genreController.index)
genreRouter.post('/', genreController.create)

export default genreRouter
