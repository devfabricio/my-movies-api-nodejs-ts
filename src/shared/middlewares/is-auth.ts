import { verify } from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import { UnauthorizedError } from '../helpers/errors'

export const isAuth = (request: Request, response: Response, next: NextFunction): void => {
  const authHeader = request.headers.authorization
  if (!authHeader) {
    throw new UnauthorizedError()
  }

  const [, token] = authHeader.split(' ')
  try {
    verify(token, process.env.SECRET_KEY)
    return next()
  } catch (error) {
    throw new UnauthorizedError()
  }
}
