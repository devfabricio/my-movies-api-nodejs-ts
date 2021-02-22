import { decode, verify } from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import { unauthorized } from '../../presentation/helpers/http/http-helper'

export const isAuth = (request: Request, response: Response, next: NextFunction): any => {
  const authHeader = request.headers.authorization
  if (!authHeader) {
    return response.status(401).json(unauthorized())
  }

  const [, token] = authHeader.split(' ')
  try {
    verify(token, process.env.SECRET_KEY)
    const decodedToken: any = decode(token)
    request.body.userId = decodedToken.uid
    return next()
  } catch (error) {
    return response.status(401).json(unauthorized())
  }
}
