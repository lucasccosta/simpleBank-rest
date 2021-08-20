import { Request, Response } from "express";
import { CreateAccountService } from "../services/CreateAccountService";



class CreateAccountController {

  async handleData(request: Request, response: Response): Promise<Response>{
    const { CPF,fullName,email,password, agency, accountNum } = request.body

    const createAccountService = new CreateAccountService
    
    const account = await createAccountService.execute({
      CPF,
      agency,
      accountNum,
      fullName,
      email,
      password
    })

    return response.json({message: "Personal account created successfully"})

  }
}

export { CreateAccountController }