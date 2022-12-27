import { Request, Response } from 'express'
import { Controller, HttpRequest } from '../../presentation/protocols'

type ExpressRouteFunction = (req: Request, res: Response) => Promise<void>

export const adaptRoute = (controller: Controller): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
