import { Request, Response } from "express";
import { CreateAuthService } from "../../services/auth/AuthService";

class CreateAuthController {

  async handleCreate(request: Request, response: Response): Promise<Response>{
    const { email,password } = request.body

    const createAuthService = new CreateAuthService
    
    const account = await createAuthService.execute({
      email,
      password
    })

    return response.json({account})

  }
}

export { CreateAuthController }