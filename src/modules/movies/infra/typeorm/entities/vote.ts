import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import User from '../../../../users/infra/typeorm/entities/user'
import Movie from './movie'

@Entity('vote')
class Vote {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  rate: number

  @ManyToOne(() => User, user => user.votes)
  user: User

  @ManyToOne(() => Movie, movie => movie.votes)
  movie: Movie
}

export default Vote
