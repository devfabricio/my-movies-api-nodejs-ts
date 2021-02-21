import { ApiController } from '../../../shared/protocols/api-controller'
import { Request, Response } from 'express'
import { makeCreateGenreService } from '../factories/genre/make-create-genre-service'

export default class GenreController implements ApiController {
  async create (request: Request, response: Response): Promise<Response> {
    const createGenre = makeCreateGenreService()
    const res = await createGenre.execute({ body: request.body })
    return response.json(res)
  }
}
