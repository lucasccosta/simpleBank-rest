import { Account } from "../../../entities/Account"

interface ITransactionHelper {
  accountInfo: Account | undefined,
  amount:number,
}

class TransactionHelper {
  validate({accountInfo, amount}:ITransactionHelper){
    this.throwErrorOnMissingAccount(accountInfo!)

    const transactionType = this.selectTransactionType({amount, accountInfo})

    const transactionObject = this.createTransactionObject({accountInfo, amount})

    return {accountInfo, transactionObject, transactionType}
  }

  selectTransactionType({amount, accountInfo}: ITransactionHelper) {
  // this.throwErrorOnMissingAccount(accountInfo)
    if(amount<=0){
        const transactionType = 'Withdraw'
        if(accountInfo!.balance<amount){
          throw new Error("You do not have enough money to perform the action")
        }
        return transactionType
      } else{
        return 'Deposit'
      }
  }

  throwErrorOnMissingAccount(accountInfo: Account) {
    if(!accountInfo){
        throw Error("This account/agency number does not exists")
      }
  }

  createTransactionObject({accountInfo, amount}: ITransactionHelper){
    const depositResult = Number((accountInfo!.balance + amount).toFixed(2))
    const depositFixed = Number(amount.toFixed(2))

    const accountSenderNum = accountInfo!.accountNum
    const accountAgencyNum = accountInfo!.agency

    const transactionDTO = {
        depositResult,
        depositFixed,
        accountAgencyNum,
        accountSenderNum
    }
    return transactionDTO
  }
}

export{ TransactionHelper }