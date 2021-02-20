import { ApiService } from '../../../../shared/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../../shared/helpers/http/protocols/http'
import { getRepository } from 'typeorm'
import Movie from '../../infra/typeorm/entities/movie'
import { ok } from '../../../../shared/helpers/http/http-helper'

export default class ListMovieService implements ApiService {
  async execute (request: HttpRequest): Promise<HttpResponse> {
    const queries = request.queries
    const moviesRepository = getRepository(Movie)
    const genreIds: string[] = []
    const actorIds: string[] = []
    const directorIds: string[] = []

    const moviesQueryBuilder = moviesRepository.createQueryBuilder('movie')

    if (queries) {
      const genre = queries.genre
      const actor = queries.actor
      const director = queries.director
      const title = queries.title

      if (genre) {
        typeof genre === 'string' ? genreIds.push(genre) : genreIds.push(...genre)
        console.log('genreIds', genreIds)
        moviesQueryBuilder.innerJoinAndSelect('movie.genres', 'genre', 'genre.id IN (:...genreIds)', { genreIds })
      } else {
        moviesQueryBuilder.leftJoinAndSelect('movie.genres', 'genre')
      }

      if (actor) {
        typeof actor === 'string' ? actorIds.push(actor) : actorIds.push(...actor)
        console.log('actorIds', actorIds)
        moviesQueryBuilder.innerJoin('movie.actors', 'actor', 'actor.id IN (:...actorIds)', { actorIds })
      }

      if (director) {
        typeof director === 'string' ? directorIds.push(director) : directorIds.push(...director)
        console.log('directorIds', directorIds)
        moviesQueryBuilder.innerJoin('movie.directors', 'director', 'director.id IN (:...directorIds)', { directorIds })
      }

      if (title) {
        if (typeof title === 'string') {
          moviesQueryBuilder.where('movie.title ILIKE :title', { title: `%${title}%` })
        }
      }
    }

    const movies = await moviesQueryBuilder.getMany()

    return ok(movies)
  }
}
