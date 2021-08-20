import { getCustomRepository } from "typeorm"
import { Account } from "../../entities/Account"
import { AccountRepository } from "../../repositories/AccountRepository"

interface IAccount {
  CPF: string,
  fullName: string,
  agency: string,
  balance: number,
  accountNum: string,
  email: string,
  password: string
}

class CreateAccountService {

  async execute({CPF,fullName,email,password, agency, accountNum, balance}:IAccount): Promise<Account>{
    const accountRepository = getCustomRepository(AccountRepository)

    const person = accountRepository.create({
      CPF,
      fullName,
      agency,
      accountNum,
      balance,
      email,
      password
    })

    await accountRepository.save(person)

    return person
  }
}

export {CreateAccountService}