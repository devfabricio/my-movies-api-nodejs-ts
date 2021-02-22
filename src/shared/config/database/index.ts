import 'dotenv/config'
import { createConnection } from 'typeorm'

createConnection()
  .then((connection) => {
    if (connection.isConnected) {
      console.log('new database connected')
    }
  }).catch(error => console.log(error))
