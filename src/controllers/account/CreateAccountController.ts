import { Request, Response } from "express";
import { CreateAccountService } from "../../services/account/CreateAccountService";

class CreateAccountController {

  async handleCreate(request: Request, response: Response): Promise<Response>{
    const { CPF,fullName,email,password, agency, accountNum, balance=0 } = request.body

    const createAccountService = new CreateAccountService
    
    const account = await createAccountService.execute({
      CPF,
      agency,
      accountNum,
      balance,
      fullName,
      email,
      password
    })

    return response.json({account, message: "Personal account created successfully" })

  }
}

export { CreateAccountController }