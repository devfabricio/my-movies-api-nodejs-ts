import { compare, hash } from 'bcrypt'
import { Encrypter } from './protocols/encrypter'

export class PasswordEncrypterAdapter implements Encrypter {
  async encrypt (password: string): Promise<string> {
    return await hash(password, 12)
  }

  async compare (password: string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword)
  }
}
