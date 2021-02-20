import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateMoviesVotes1613855431840 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'vote',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      },
      {
        name: 'rate',
        type: 'integer'
      },
      {
        name: 'movieId',
        type: 'uuid'
      },
      {
        name: 'userId',
        type: 'uuid'
      }]
    }))
    const movieForeignKey = new TableForeignKey({
      columnNames: ['movieId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'movie',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
    await queryRunner.createForeignKey('vote', movieForeignKey)

    const actorForeignKey = new TableForeignKey({
      columnNames: ['userId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'user',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
    await queryRunner.createForeignKey('vote', actorForeignKey)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vote')
  }
}
