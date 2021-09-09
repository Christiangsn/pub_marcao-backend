import { HttpException } from '../httpException'

class UnauthorizedException extends HttpException {
  constructor (msg: string) {
    super(msg || 'Unauthorized', 401)
  }
}

export { UnauthorizedException }
