import { Controller, HttpRequest, HttpResponse } from '../../presentation/protocols'

/**
 * TTT
 * Envolve outras classes, que implementam a mesma interface (Controller)
 * O decorator deve implementar também essa interface (Controller)
 */
export class LogControllerDecorator implements Controller {
  private readonly controller: Controller

  constructor (controller: Controller) {
    this.controller = controller
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest)
    return httpResponse
  }
}
