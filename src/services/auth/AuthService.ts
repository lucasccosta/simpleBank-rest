import { getCustomRepository } from "typeorm"
import { Account } from "../../entities/Account"
import { AccountRepository } from "../../repositories/AccountRepository"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


interface IAccount {
  email: string,
  password: string
}

class CreateAuthService {

  async execute({email,password}:IAccount){
    const accountRepository = getCustomRepository(AccountRepository)

    const account = await accountRepository.findOne({
      email,
    })

    if(!account){
      throw new Error("Account does not exists")
    }
//                                           password(req) password(armazenada no db)
    const isValidPassword = await bcrypt.compare(password, account.password)

    if (!isValidPassword){
      throw new Error("Passwords does not match")
    }

    const token = jwt.sign({id: account.id}, 'secret_key', {expiresIn: '1d'})
  
    return {account, token}
  }
}

export {CreateAuthService}