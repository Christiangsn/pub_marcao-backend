import express from 'express'
import routes from './routes'
import cors from 'cors'

class App {
    public app: express.Application

    constructor () {
      this.app = express()
      this.middlewares()
      this.routes()
    }

    private middlewares (): void {
      this.app.use(express.json())
      this.app.use(cors())
    }

    private routes (): void {
      routes(this.app)
    }
}

export default new App().app
