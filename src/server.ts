import express from 'express'
import cors from 'cors'
import './shared/config/database'
import setupSwagger from './shared/config/swagger'
import 'dotenv/config'
import setupRoutes from './shared/main/routes'

const app = express()

setupSwagger(app)
app.use(cors())
app.use(express.json())
setupRoutes(app)

app.listen(8000, () => {
  console.log('The app is working in port 8000! It\'s time to fly, Ioasys! 🚀')
})
