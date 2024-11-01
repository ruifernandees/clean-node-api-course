import { Express } from 'express'
import { bodyParser, contentType, cors } from '../middlewares'

export const setUpMiddlewares = (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}
