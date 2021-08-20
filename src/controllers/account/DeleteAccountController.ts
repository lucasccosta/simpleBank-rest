import { Request, Response } from "express";
import { DeleteAccountService } from "../../services/account/DeleteAccountService";



class DeleteAccountController {

  async handleDelete(request: Request, response: Response): Promise<Response>{
    const { CPF } = request.body

    const deleteAccountService = new DeleteAccountService()
    
    const account = await deleteAccountService.execute(CPF)

    return response.json({message: "Personal account deleted successfully"})

  }
}

export { DeleteAccountController }