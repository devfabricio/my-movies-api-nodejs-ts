import 'dotenv/config'
import app from './shared/main/config/app'

app.listen(process.env.PORT || 8000, () => {
  console.log(`The app is working in port ${process.env.PORT || 8000}! It's time to fly, Ioasys! 🚀`)
})
