import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.send('Hello Ioasys')
})

app.listen(8000)