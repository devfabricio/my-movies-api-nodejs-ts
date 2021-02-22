import { NextFunction, Request, Response } from 'express'
import { getRepository } from 'typeorm'
import User from '../../../modules/users/infra/typeorm/entities/user'
import { Roles } from '../../presentation/protocols/api-roles'
import { unauthorized } from '../../presentation/helpers/http/http-helper'

export const isDefaultUser = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
  const { userId } = request.body

  const userRepository = getRepository(User)
  const user = await userRepository.findOne({
    where: { id: userId }, relations: ['role']
  })

  if (user.role?.name === Roles.ADMINISTRATOR) {
    return response.status(401).json(unauthorized())
  }

  return next()
}
