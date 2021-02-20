import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('actor')
class Actor {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string
}

export default Actor
