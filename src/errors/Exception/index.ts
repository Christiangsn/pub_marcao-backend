import { BadRequestException } from './BadExceptionError'
import { UnauthorizedException } from './UnauthorizedException'

export default {
  BadRequestException: (msg: string) => new BadRequestException(msg),
  UnauthorizedException: (msg: string) => new UnauthorizedException(msg)
}
