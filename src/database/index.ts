import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

class MongoDb {
  constructor () {
    this.dbConnection()
  }

  public async dbConnection () {
    const SqlConnectionMongo = process.env.NOSQL_CONNECTION_MONGO_QA!
    await mongoose.connect(SqlConnectionMongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions)

    mongoose.connection.on('connected', () => {
      console.log('MongoDB ON')
    })
    mongoose.Promise = global.Promise
  }
}

export const { dbConnection } = new MongoDb()
