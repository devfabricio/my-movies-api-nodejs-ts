import { HttpResponse } from './protocols/http'
import { ServerError, UnauthorizedError } from '../errors'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error.message
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError().message
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError().message
})

export const ok = (body: any): HttpResponse => ({
  statusCode: 200,
  body: body
})

export const created = (modelName: string, id: string): HttpResponse => ({
  statusCode: 201,
  body: {
    id,
    message: `${modelName} created successfully`
  }
})
