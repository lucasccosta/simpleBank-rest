import { getCustomRepository } from "typeorm"
import { TransactionRepository } from "../../repositories/TransactionRepository"

class GetTransactionService {
  async execute(account_sender_id: Object){
    const transactionRepository = getCustomRepository(TransactionRepository)

    const filterTransaction = await transactionRepository.find(account_sender_id)

    if(!filterTransaction){
      throw new Error("This account have not done transactions yet")
    }

    return filterTransaction
  }
}

export { GetTransactionService }