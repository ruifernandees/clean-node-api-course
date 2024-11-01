import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return 'hash'
  }
}))

const salt = 12

const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct value', async () => {
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    const sut = makeSut()
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  test('Should return a hash on success', async () => {
    const sut = makeSut()
    const hash = await sut.encrypt('any_value')
    expect(hash).toBe('hash')
  })

  test('Should throw if BcryptThrows', async () => {
    const sut = makeSut()
    jest.spyOn(bcrypt, 'hash').mockImplementation(() => {
      throw new Error()
    })
    await expect(async () => await sut.encrypt('any_value')).rejects.toThrow()
  })
})
