import bodyParser from 'body-parser'
import User from './User.Routes'
import Client from './Client.Routes'

export default (app: any) => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(User, Client)
}
