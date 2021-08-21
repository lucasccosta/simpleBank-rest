import { Account } from "../../../entities/Account"

interface ITransactionHelper {
  accountInfo: Account | undefined,
  amount:number,
  
}

class TransactionHelper {
  async validate({accountInfo, amount}:ITransactionHelper){
    
    if(!accountInfo){
      throw new Error("This account/agency number does not exists")
    }

    let transactionType = ''
    if(amount<=0){
      transactionType = 'Withdraw'
      if(accountInfo.balance<amount){
        throw new Error("You do not have enough money to perform the action")
      }
    } else{
      transactionType = 'Deposit'
    }

    // Como toFixed retorna uma string, parseamos o resultado para Number
    const depositResult = Number((accountInfo.balance + amount).toFixed(2))
    const depositFixed = Number(amount.toFixed(2))

    const accountSenderNum = accountInfo.accountNum
    const accountAgencyNum = accountInfo.agency

    return {accountInfo, transactionType, depositResult, depositFixed,accountSenderNum, accountAgencyNum }
  }
}

export{ TransactionHelper }