import { getCustomRepository } from "typeorm"
import { AccountRepository } from "../repositories/AccountRepository"

interface IAccount {
  CPF: string,
  fullName: string,
  agency: string,
  accountNum: string,
  email: string,
  password: string
}

class CreateAccountService {

  async execute({CPF,fullName,email,password, agency, accountNum}:IAccount){
    const accountRepository = getCustomRepository(AccountRepository)

    const person = accountRepository.create({
      CPF,
      fullName,
      agency,
      accountNum,
      email,
      password
    })

    await accountRepository.save(person)

    return person
  }
}

export {CreateAccountService}