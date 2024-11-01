import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  url: null as string,

  async connect (url: string): Promise<void> {
    this.url = url
    this.client = await MongoClient.connect(url)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client?.topology?.isConnected()) {
      await this.connect(this.url)
    }
    return this.client.db().collection(name)
  },

  map ({ _id, ...data }: any): any {
    return {
      ...data,
      id: _id
    }
  }
}
