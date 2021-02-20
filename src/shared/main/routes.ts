import { Router } from 'express'
import userRouter from '../../modules/users/routes/user.routes'
import genreRouter from '../../modules/movies/routes/genre.routes'
import actorRouter from '../../modules/movies/routes/actor.routes'
import directorRouter from '../../modules/movies/routes/director.routes'

const routes = Router()

routes.use('/user', userRouter)
routes.use('/genre', genreRouter)
routes.use('/actor', actorRouter)
routes.use('/director', directorRouter)

export default routes
