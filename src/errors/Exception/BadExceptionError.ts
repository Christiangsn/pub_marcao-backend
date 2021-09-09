import { HttpException } from '../httpException'

class BadRequestException extends HttpException {
  constructor (msg: string) {
    super(msg || 'Bad Request', 400)
  }
}

export { BadRequestException }
