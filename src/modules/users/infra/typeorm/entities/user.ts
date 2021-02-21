import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import Vote from '../../../../movies/infra/typeorm/entities/vote'
import Role from './role'

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

  @OneToMany(() => Vote, vote => vote.user)
  votes: Vote[]

  @ManyToOne(() => Role, role => role.users)
  role: Role

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

export default User
