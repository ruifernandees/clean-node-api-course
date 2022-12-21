import { Express } from 'express'
import { bodyParser } from '../middlewares/body-parser'

export const setUpMiddlewares = (app: Express): void => {
  app.use(bodyParser)
}
