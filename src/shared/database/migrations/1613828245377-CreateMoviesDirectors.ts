import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateMoviesDirectors1613828245377 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'movie_directors_director',
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
        name: 'directorId',
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
    await queryRunner.createForeignKey('movie_directors_director', movieForeignKey)

    const directorForeignKey = new TableForeignKey({
      columnNames: ['directorId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'director',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
    await queryRunner.createForeignKey('movie_directors_director', directorForeignKey)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movie_directors_director')
  }
}
