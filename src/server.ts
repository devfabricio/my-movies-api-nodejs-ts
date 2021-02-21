import express from 'express'
import routes from './shared/main/routes'
import cors from 'cors'
import './shared/database'
import 'dotenv/config'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(8000, () => {
  console.log('The app is working in port 8000! It\'s time to fly, Ioasys! 🚀')
})
