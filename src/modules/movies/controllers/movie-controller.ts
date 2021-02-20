import { ApiController } from '../../../shared/protocols/api-controller'
import { Request, response, Response } from 'express'
import { makeCreateMovieService } from '../factories/movie/create-movie/make-create-movie-service'
import ListMovieService from '../services/movie/list-movie-service'

export default class MovieController implements ApiController {
  async create (request: Request, response: Response): Promise<Response> {
    const createMovie = makeCreateMovieService()
    const res = await createMovie.execute({ body: request.body })
    return response.json(res)
  }

  async index (): Promise<Response> {
    const listMovie = new ListMovieService()
    const res = await listMovie.execute()
    return response.json(res)
  }
}
