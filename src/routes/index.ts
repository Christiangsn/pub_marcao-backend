import bodyParser from 'body-parser'
import User from './User.Routes'

export default (app: any) => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(User)
}
