import { Account } from "../../../entities/Account"

interface ITransferHelper {
  amount: number,
  accountSenderExists: Account | undefined,
  accountReceiverExists: Account | undefined
}

class TransferHelper {
  async validate({amount, accountSenderExists, accountReceiverExists}: ITransferHelper){
    if(!accountSenderExists){
      throw new Error("Incorrect account's sender number, please input the correct one")
    }
    if(!accountReceiverExists){
      throw new Error("Incorrect account's receiver number, please input the correct one")
    }
  
    // Verificar se o amount é valido
    if(amount<=0){
      throw new Error("Please input a correct amount")
    }
  
    // Verificar se o sender tem dinheiro em conta
    const senderAmount = accountSenderExists.balance
    
    if(senderAmount < amount){
      throw new Error("The account's sender does not have the sufficient amount to perform the action")
    }
    
    const totalSender = Number((senderAmount - amount).toFixed(2))
    const totalReceiver = Number((accountReceiverExists.balance + amount).toFixed(2))
    
    return {
      accountSenderExists,
      accountReceiverExists,
      totalSender,
      totalReceiver
    }
  }
}

export { TransferHelper }