import { Router } from 'express'
import userRouter from '../../modules/users/routes/user.routes'
import genreRouter from '../../modules/movies/routes/genre.routes'

const routes = Router()

routes.use('/user', userRouter)
routes.use('/genre', genreRouter)

export default routes
