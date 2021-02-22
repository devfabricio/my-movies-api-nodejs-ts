const devPath = {
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: [
    './src/shared/infra/database/migrations/*.ts'
  ],
  cli: {
    migrationsDir: './src/shared/infra/database/migrations'
  }
}

const buildPath = {
  entities: ['./dist/modules/**/infra/typeorm/entities/*.js'],
  migrations: [
    './dist/shared/infra/database/migrations/*.js'
  ],
  cli: {
    migrationsDir: './dist/shared/infra/database/migrations'
  }
}

const prodPath = {
  ...buildPath,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const configPath = () => {
  const app_env = process.env.APP_ENVIRONMENT
  let path;
  switch (app_env) {
    case 'prod':
      path = prodPath
      break
    case 'build':
      path = buildPath
      break
    default:
      path = devPath
  }
  return path
}


module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ...configPath()
}
