import { getCustomRepository } from "typeorm"
import { Transaction } from "../../entities/Transaction"
import { AccountRepository } from "../../repositories/AccountRepository"
import { TransactionRepository } from "../../repositories/TransactionRepository"
import { TransferHelper } from "./helper/TransferHelper"

interface ICreateTransfer {
  account_sender_id: string,
  account_receiver_id: string
  amount: number
}

class CreateTransferService {
  async execute({account_sender_id, account_receiver_id, amount}:ICreateTransfer):Promise<Transaction>{
    const transactionRepository = getCustomRepository(TransactionRepository)
    const accountRepository = getCustomRepository(AccountRepository)
    const transferHelper = new TransferHelper()
  
    // Verificar se account sender/receiver existe
    const accountSenderExists = await accountRepository.findOne({id:account_sender_id})
    const accountReceiverExists = await accountRepository.findOne({id:account_receiver_id})

    const helper = await transferHelper.validate({amount, accountSenderExists, accountReceiverExists})

    const createTransaction = transactionRepository.create({
      account_sender_id,
      account_sender: helper.accountSenderExists.accountNum,
      account_receiver_id,
      account_receiver: helper.accountReceiverExists.accountNum,
      agency_sender: helper.accountSenderExists.agency,
      agency_receiver: helper.accountReceiverExists.agency,
      amount,
      transaction_type:"Transfer"
    })

    await transactionRepository.save(createTransaction)

    return createTransaction
  }
}

export {CreateTransferService}