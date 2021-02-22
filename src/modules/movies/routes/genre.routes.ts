import { Router } from 'express'
import GenreController from '../controllers/genre-controller'
import { isAuth } from '../../../shared/main/middlewares/is-auth'
import { isAdmin } from '../../../shared/main/middlewares/is-admin'

const genreRouter = Router()
const genreController = new GenreController()

genreRouter.get('/', genreController.index)
genreRouter.post('/', isAuth, isAdmin, genreController.create)

export default genreRouter
