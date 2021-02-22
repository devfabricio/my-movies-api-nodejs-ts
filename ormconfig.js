const prod_env = process.env.APP_ENVIRONMENT === 'prod'
const build_env = process.env.APP_ENVIRONMENT === 'build'

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [prod_env || build_env ? './dist/modules/**/infra/typeorm/entities/*.js' : './src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: [
    './src/shared/infra/database/migrations/*.ts'
  ],
  cli: {
    migrationsDir: './src/shared/infra/database/migrations'
  },
  ssl: prod_env,
  extra: prod_env ? {
    ssl: {
      rejectUnauthorized: false
    }
  } : null
}
