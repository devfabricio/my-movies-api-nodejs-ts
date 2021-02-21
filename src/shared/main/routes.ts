import { Router } from 'express'
import userRouter from '../../modules/users/routes/user.routes'
import genreRouter from '../../modules/movies/routes/genre.routes'
import actorRouter from '../../modules/movies/routes/actor.routes'
import directorRouter from '../../modules/movies/routes/director.routes'
import movieRouter from '../../modules/movies/routes/movie.routes'
import voteRouter from '../../modules/movies/routes/vote.routes'
import authenticationRouter from '../../modules/users/routes/auth.routes'

const routes = Router()

routes.use('/auth', authenticationRouter)
routes.use('/user', userRouter)
routes.use('/genre', genreRouter)
routes.use('/actor', actorRouter)
routes.use('/director', directorRouter)
routes.use('/movie', movieRouter)
routes.use('/vote', voteRouter)

export default routes
