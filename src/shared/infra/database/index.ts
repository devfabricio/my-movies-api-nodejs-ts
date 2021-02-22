import 'dotenv/config'
import { createConnection } from 'typeorm'

createConnection()
  .then((connection) => {
    if (connection.isConnected) {
      console.log('...and the database is also connected!')
      console.log('It\'s time to fly, Ioasys! 🚀')
    }
  }).catch(error => console.log(error))
