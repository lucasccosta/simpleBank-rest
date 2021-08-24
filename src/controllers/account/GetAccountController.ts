import { Request, Response } from "express";
import { GetAccountService } from "../../services/account/GetAccountService";

class GetAccountController {
  async handleFilter(request: Request, response: Response){
    const getAccountService = new GetAccountService()
    const {agency, accountNum} = request.body

    const account = await getAccountService.execute(agency, accountNum)

    return response.status(200).json(account)
  }
}

export {GetAccountController}