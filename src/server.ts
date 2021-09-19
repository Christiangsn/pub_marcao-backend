import app from './app'
import dotenv from 'dotenv'
import './database'

dotenv.config()
const port = process.env.APP_PORT

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`)
})
