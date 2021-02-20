import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('genre')
class Genre {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string
}

export default Genre
