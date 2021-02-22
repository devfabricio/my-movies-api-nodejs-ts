import { ApiController } from '../../../shared/presentation/protocols/api-controller'
import { Request, Response } from 'express'
import { makeCreateMovieService } from '../factories/movie/make-create-movie-service'
import ListMovieService from '../services/movie/list-movie-service'
import ShowMovieService from '../services/movie/show-movie-service'

export default class MovieController implements ApiController {
  async create (request: Request, response: Response): Promise<Response> {
    const createMovie = makeCreateMovieService()
    const res = await createMovie.execute({ body: request.body })
    return response.status(res.statusCode).json(res)
  }

  async index (request: Request, response: Response): Promise<Response> {
    const listMovie = new ListMovieService()
    const queries = request.query
    const res = await listMovie.execute({ queries })
    return response.status(res.statusCode).json(res)
  }

  async show (request: Request, response: Response): Promise<Response> {
    const showMovie = new ShowMovieService()
    const params = request.params
    const res = await showMovie.execute({ params })
    return response.status(res.statusCode).json(res)
  }
}
