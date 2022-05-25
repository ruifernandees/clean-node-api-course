import { SignUpController } from "./signup";

describe('SignUpController', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: 'a@a.com',
        password: '123',
        passwordConfirmation: '123',
      }
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});