import 'dotenv/config'

export = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: [
    './src/shared/infra/database/migrations/*.ts'
  ],
  cli: {
    migrationsDir: './src/shared/infra/database/migrations'
  },
  ssl: process.env.APP_ENVIRONMENT === 'prod',
  extra: process.env.APP_ENVIRONMENT === 'prod' ? {
    ssl: {
      rejectUnauthorized: false
    }
  } : null
}
