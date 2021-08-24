import { getCustomRepository } from "typeorm"
import { AccountRepository } from "../../repositories/AccountRepository"
import { TransactionRepository } from "../../repositories/TransactionRepository"
import { TransactionHelper } from "./helper/TransactionHelper"


interface ICreateDeposit {
  account_sender_id: string,
  amount: number
}

class CreateTransactionService {
  async execute({account_sender_id, amount}:ICreateDeposit){
    const transactionRepository = getCustomRepository(TransactionRepository)
    const accountRepository = getCustomRepository(AccountRepository)
    const transactionHelper = new TransactionHelper()

    const accountNum = account_sender_id
    
    const accountInfo = await accountRepository.findOne({id:accountNum})

    const helper = transactionHelper.validate({
      amount,
      accountInfo
    })

    const transaction = await transactionRepository.create({
      account_sender_id,
      account_sender:helper.transactionObject.accountSenderNum,
      agency_sender: helper.transactionObject.accountAgencyNum,
      amount:helper.transactionObject.depositFixed,
      transaction_type:helper.transactionType
    })

    const updateAccount = await accountRepository.update({id:accountNum},{
      balance: helper.transactionObject.depositResult
    })
    
    await transactionRepository.save(transaction)

    return transaction
  }
}

export {CreateTransactionService}