import { hash } from 'bcrypt'
import { Encrypter } from './protocols/encrypter'

export class PasswordEncrypterAdapter implements Encrypter {
  async encrypt (password: string): Promise<string> {
    return await hash(password, 12)
  }
}
