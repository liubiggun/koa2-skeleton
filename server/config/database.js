import mongoose from 'mongoose'
import log4js from 'log4js'

const logger = log4js.getLogger('default')

export default function configDB () {
  // Use native promises
  mongoose.Promise = global.Promise

  mongoose.connect('mongodb://localhost/koa-server')

  const db = mongoose.connection
  db
    .on('error', (error) => {
      logger.error(`database connection error: ${error}`)
    })
    .once('open', () => {
      console.log('database connected')
    })
}
