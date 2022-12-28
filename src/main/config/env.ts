import dotenv from 'dotenv'

dotenv.config()

export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-node-api',
  mongoUrlTest: process.env.MONGO_URL_TEST,
  port: process.env.PORT || 5050
}
