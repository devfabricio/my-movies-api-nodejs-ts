import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import Vote from "../../../../movies/infra/typeorm/entities/vote";

@Entity('user')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  activation: number

  @Column()
  isAdmin: boolean

  @OneToMany(() => Vote, vote => vote.user)
  votes: Vote[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

export default User
