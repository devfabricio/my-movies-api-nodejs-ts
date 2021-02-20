import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('director')
class Director {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string
}

export default Director
