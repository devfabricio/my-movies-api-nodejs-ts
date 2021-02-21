import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateMoviesActors1613828262714 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'movie_actors_actor',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      },
      {
        name: 'movieId',
        type: 'uuid'
      },
      {
        name: 'actorId',
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
    await queryRunner.createForeignKey('movie_actors_actor', movieForeignKey)

    const actorForeignKey = new TableForeignKey({
      columnNames: ['actorId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'actor',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
    await queryRunner.createForeignKey('movie_actors_actor', actorForeignKey)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movie_actors_actor')
  }
}
