import { Request, Response } from "express";
import { UpdateAccountServices } from "../../services/account/UpdateAccountServices";


class UpdateAccountController {
  async handleUpdate(request: Request, response: Response): Promise<Response>{
    const {fullName,email,password, agency, accountNum} = request.body

    const updateAccountServices = new UpdateAccountServices()

    const updateAccount = await updateAccountServices.execute({
      agency,
      accountNum,
      fullName,
      email,
      password
    })

    return response.status(200).json({fullName, email, password, new: true})
  }
}

export { UpdateAccountController }