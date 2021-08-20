import { getCustomRepository, UpdateResult } from "typeorm";
import { AccountRepository } from "../../repositories/AccountRepository";


interface IAccount {
  agency: string,
  accountNum: string,
  fullName?: string,
  email?: string,
  password?: string
}


class UpdateAccountServices {

  async execute({agency, accountNum,fullName,email,password}: IAccount): Promise<UpdateResult>{
    const accountRepository = getCustomRepository(AccountRepository)

    const accountExists = await accountRepository.findOne({
      agency,
      accountNum
    })

    if(!accountExists){
      throw new Error("Insert a valid account")
    }

    const updateAccount = await accountRepository.update({agency, accountNum},{
      fullName,
      email,
      password
    })

    return updateAccount
  }
}

export { UpdateAccountServices }