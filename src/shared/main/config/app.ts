import express from 'express'
import setupSwagger from '../../doc/swagger'
import setupRoutes from '../routes'
import setupMiddlewares from './middlewares'
import '../../infra/database'

const app = express()

setupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)

export default app
