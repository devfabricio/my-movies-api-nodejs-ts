import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import Genre from './genre'
import Actor from './actor'
import Director from './director'
import Vote from './vote'

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

  @OneToMany(() => Vote, vote => vote.movie)
  votes: Vote[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

export default Movie
