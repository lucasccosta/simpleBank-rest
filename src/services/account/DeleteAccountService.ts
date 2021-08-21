import { DeleteResult, getCustomRepository } from "typeorm"
import { AccountRepository } from "../../repositories/AccountRepository"


class DeleteAccountService {

  async execute(CPF: string): Promise<DeleteResult>{
    const accountRepository = getCustomRepository(AccountRepository)

    const cpfExists = await accountRepository.findOne(CPF)

    if(!cpfExists){
      throw new Error("Please, insert a valid CPF")
    }

    const person = await accountRepository.delete({
      CPF,
    })

    return person
  }
}

export {DeleteAccountService}