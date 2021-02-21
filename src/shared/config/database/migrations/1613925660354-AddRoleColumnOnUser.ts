import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm'

export class AddRoleColumnOnUser1613925660354 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user', 'isAdmin')
    await queryRunner.addColumn('user', new TableColumn({
      name: 'roleId',
      type: 'uuid',
      isNullable: true
    }))
    const roleForeignKey = new TableForeignKey({
      name: 'UserRole',
      columnNames: ['roleId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'role',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    })
    await queryRunner.createForeignKey('user', roleForeignKey)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('user', 'UserRole')
    await queryRunner.dropColumn('user', 'roleId')
    await queryRunner.addColumn('user', new TableColumn({
      name: 'isAdmin',
      type: 'boolean'
    }))
  }
}
