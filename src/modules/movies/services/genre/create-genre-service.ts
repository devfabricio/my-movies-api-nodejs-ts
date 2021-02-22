import { ApiService } from '../../../../shared/presentation/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../../shared/presentation/helpers/http/protocols/http'
import { Validator } from '../../../../shared/presentation/helpers/validators/protocols/validator'
import { badRequest, created, serverError } from '../../../../shared/presentation/helpers/http/http-helper'
import { getRepository } from 'typeorm'
import Genre from '../../infra/typeorm/entities/genre'

type GenreData = {
  name: string
}

export default class CreateGenreService implements ApiService {
  constructor (private readonly validators: Validator) {}

  async execute (request: HttpRequest): Promise<HttpResponse> {
    try {
      console.log(request)
      const error = this.validators.validate(request.body)
      if (error) {
        return badRequest(error)
      }
      const genreRepository = getRepository(Genre)
      const { name } = request.body
      const genreData: GenreData = { name }
      const genre = genreRepository.create(genreData)

      await genreRepository.save(genre)

      return created('Genre', genre.id)
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
