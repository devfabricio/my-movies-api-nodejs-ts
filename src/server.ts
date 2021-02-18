import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.send('Hello Ioasys')
})

app.listen(8000, () => {
  console.log('The app is working! It\'s time to fly, Ioasys! 🚀')
})