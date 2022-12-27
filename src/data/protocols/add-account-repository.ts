import { AccountModel } from '../../domain/models/account'
import { AddAccountModel } from '../../presentation/controllers/signup/signup-protocols'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
}
