import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { authConfig } from '../config/AuthConfig'
import Token from '../models/Tokens'
import Errors from '../errors/Exception'

async function AuthMiddleware (req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      throw Errors.UnauthorizedException('No token provided')
    }

    const parts = authHeader.split(' ')

    if (!String(parts.length === 2)) {
      throw Errors.UnauthorizedException('No token provided')
    }

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme)) {
      throw Errors.UnauthorizedException('Invalid Request')
    }

    try {
      verify(token, authConfig.secret, (err, decoded: any) => {
        if (err) {
          console.log(err)
          throw Errors.UnauthorizedException('Token error')
        }
        req.idToken = decoded.sub
      })

      const verifyToken = await Token.find({ _tokenUserId: Number(req.idToken) }).exec()

      if (!verifyToken) {
        throw Errors.UnauthorizedException('No token provided')
      }
      next()
    } catch (error) {
      throw Errors.UnauthorizedException('Token invalid')
    }
  } catch (error: any) {
    return res.status(error.status || 400).json({ error: { message: error.message || 'Ocorreu um erro inesperado', status: error.status || 400 } })
  }
}

export default AuthMiddleware
