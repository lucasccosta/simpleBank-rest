import { getCustomRepository } from "typeorm"
import { Transaction } from "../../entities/Transaction"
import { AccountRepository } from "../../repositories/AccountRepository"
import { TransactionRepository } from "../../repositories/TransactionRepository"
import { TransactionHelper } from "./helper/TransactionHelper"


interface ICreateDeposit {
  account_sender_id: string,
  amount: number
}

class CreateTransactionService {
  async execute({account_sender_id, amount}:ICreateDeposit): Promise<Transaction>{
    const transactionRepository = getCustomRepository(TransactionRepository)
    const accountRepository = getCustomRepository(AccountRepository)
    const transactionHelper = new TransactionHelper()

    const accountNum = account_sender_id
    
    const accountInfo = await accountRepository.findOne({id:accountNum})
    
    // VALE A PENA JOGAR ESSAS VALIDAÇÕES PARA UMA OUTRA CAMADA???
    // if(!accountInfo){
    //   throw new Error("This account/agency number does not exists")
    // }

    // let transactionType = ''
    // if(amount<=0){
    //   transactionType = 'Withdraw'
    //   if(accountInfo.balance<amount){
    //     throw new Error("You do not have enough money to perform the action")
    //   }
    // } else{
    //   transactionType = 'Deposit'
    // }

    // // Como toFixed retorna uma string, parseamos o resultado para Number
    // const depositResult = Number((accountInfo.balance + amount).toFixed(2))
    // const depositFixed = Number(amount.toFixed(2))

    // const accountSenderNum = accountInfo.accountNum
    // const accountAgencyNum = accountInfo.agency

    const helper = await transactionHelper.validate({
      accountInfo,
      amount
    })

    const transaction = await transactionRepository.create({
      account_sender_id,
      account_sender:helper.accountSenderNum,
      agency_sender: helper.accountAgencyNum,
      amount:helper.depositFixed,
      transaction_type:helper.transactionType
    })

    const updateAccount = await accountRepository.update({id:accountNum},{
      balance: helper.depositResult
    })
    
    await transactionRepository.save(transaction)

    return transaction
  }
}

export {CreateTransactionService}