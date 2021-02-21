import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AlterActivationTypeOnUserTable1613929898168 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn('user', 'activation', new TableColumn({
      name: 'activation',
      type: 'varchar',
      default: "'active'"
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn('user', 'activation', new TableColumn({
      name: 'activation',
      type: 'integer',
      default: 1
    }))
  }
}
