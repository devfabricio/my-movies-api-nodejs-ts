import 'dotenv/config'
import './shared/infra/database'
import app from './shared/main/config/app'

app.listen(process.env.PORT || 8000, () => {
  console.log(`The app is working in port ${process.env.PORT || 8000}! It's time to fly, Ioasys! 🚀`)
})
