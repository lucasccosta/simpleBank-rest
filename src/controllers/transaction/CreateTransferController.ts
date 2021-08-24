import { Request, Response } from "express"
import { CreateTransferService } from "../../services/transaction/CreateTransferService"

class CreateTransferController {
  async handleTransfer(request: Request, response: Response): Promise<Response>{
    const createTransferService = new CreateTransferService()

    const {account_sender_id, account_receiver_id, amount} = request.body

    const depositValue = await createTransferService.execute({
      account_sender_id,
      account_receiver_id,
      amount
    })

    return response.status(200).json(`Transfer done || Amount: ${depositValue.amount} between from: ${depositValue.account_sender} to ${depositValue.account_receiver}`)
  }
}

export {CreateTransferController}