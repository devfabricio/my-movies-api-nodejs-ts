import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateMoviesGenres1613828215321 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'movie_genres_genre',
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
        name: 'genreId',
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
    await queryRunner.createForeignKey('movie_genres_genre', movieForeignKey)

    const genreForeignKey = new TableForeignKey({
      columnNames: ['genreId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'genre',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
    await queryRunner.createForeignKey('movie_genres_genre', genreForeignKey)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movie_genres_genre')
  }
}
