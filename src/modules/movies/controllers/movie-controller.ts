import { ApiController } from '../../../shared/protocols/api-controller'
import { Request, Response } from 'express'
import { makeCreateMovieService } from '../factories/movie/create-movie/make-create-movie-service'

export default class MovieController implements ApiController {
  async create (request: Request, response: Response): Promise<Response> {
    const createMovie = makeCreateMovieService()
    const res = await createMovie.execute({ body: request.body })
    return response.json(res)
  }
}
