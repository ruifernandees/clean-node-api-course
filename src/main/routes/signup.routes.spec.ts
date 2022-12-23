import request from 'supertest'
import { app } from '../config/app'

describe('SignUp routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .get('/api/signup')
      .send({
        name: 'Rui',
        email: 'rui@mail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
