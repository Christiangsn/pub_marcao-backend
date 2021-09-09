import dotenv from 'dotenv'
import IParams from '../dtos/IParams'
dotenv.config()

const paramsConfig: IParams = {
  salt: Number(process.env.SALT_WORK_FACTOR)!,
  length: Number(process.env.AUTH_EXPIRES)!
}

export { paramsConfig }
