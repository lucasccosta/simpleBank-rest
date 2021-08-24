import { getCustomRepository } from "typeorm"
import { AccountRepository } from "../../repositories/AccountRepository"

class GetAccountService {
  async execute(agency: string, accountNum: string){
    const accountRepository = getCustomRepository(AccountRepository)

    const filterAccount = accountRepository.findOne({
      agency,
      accountNum
    })

    if(!filterAccount){
      throw new Error("Account does not exists, please input the correct infos")
    }

    return filterAccount
  }
}

export { GetAccountService }