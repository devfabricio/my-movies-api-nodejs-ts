import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import Genre from './genre'
import Actor from './actor'
import Director from './director'

@Entity('movie')
class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column()
  overview: string

  @Column()
  releaseDate: string

  @Column()
  posterPath: string

  @Column()
  voteAverage: number

  @ManyToMany(() => Genre)
  @JoinTable()
  genres: Genre[]

  @ManyToMany(() => Actor)
  @JoinTable()
  actors: Actor[]

  @ManyToMany(() => Director)
  @JoinTable()
  directors: Director[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

export default Movie
