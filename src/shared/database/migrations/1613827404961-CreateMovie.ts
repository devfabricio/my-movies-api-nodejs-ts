import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateMovie1613827404961 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    await queryRunner.createTable(new Table({
      name: 'movie',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      },
      {
        name: 'title',
        type: 'varchar'
      },
      {
        name: 'overview',
        type: 'varchar'
      },
      {
        name: 'releaseDate',
        type: 'varchar'
      },
      {
        name: 'posterPath',
        type: 'varchar'
      },
      {
        name: 'voteAverage',
        type: 'float'
      },
      {
        name: 'createdAt',
        type: 'timestamp',
        default: 'now()'
      },
      {
        name: 'updatedAt',
        type: 'timestamp',
        default: 'now()'
      }]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movie')
  }
}
