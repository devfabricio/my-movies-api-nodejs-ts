export interface Encrypter {
  encrypt(password: string): Promise<string>
  compare(password: string, hashedPassword: string): Promise<boolean>
}
