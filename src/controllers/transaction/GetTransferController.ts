import { Request, Response } from "express";
import { GetTransactionService } from "../../services/transaction/GetTransactionService";

class GetTransactionController {
  async handleFilterTransaction(request: Request, response: Response){
    const getTransactionService = new GetTransactionService()
    const {account_sender_id} = request.body

    const transaction = await getTransactionService.execute({account_sender_id})

    return response.status(200).json(transaction)
  }
}

export {GetTransactionController}