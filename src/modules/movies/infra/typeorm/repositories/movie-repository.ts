import { EntityRepository, Repository } from 'typeorm'
import Movie from '../entities/movie'

@EntityRepository(Movie)
export default class MovieRepository extends Repository<Movie> {
  public async findByFilters (queries: any): Promise<Movie[] | null> {
    const genreIds: string[] = []
    const actorIds: string[] = []
    const directorIds: string[] = []

    const moviesQueryBuilder = this.createQueryBuilder('movie')
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

    return await moviesQueryBuilder.getMany()
  }
}
