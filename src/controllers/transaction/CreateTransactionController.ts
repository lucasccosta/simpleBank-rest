import { Request, Response } from "express";
import { CreateTransactionService } from "../../services/transaction/CreateTransactionService";

class CreateTransactionController {
  async handleTransaction(request: Request, response: Response){
    const createDepositService = new CreateTransactionService()

    const {account_sender_id, amount} = request.body

    const depositValue = await createDepositService.execute({
      account_sender_id,
      amount
    })

    return response.status(200).json(`${depositValue.transaction_type} done || Amount: ${depositValue.amount}`)
  }
}

export { CreateTransactionController }