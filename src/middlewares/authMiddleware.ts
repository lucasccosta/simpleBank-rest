import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface ITokenPayload {
  id: string
  iat: number;
  exp: number;
}

const authMiddleware = (request: Request, response: Response, next: NextFunction) => {

  const { authorization } = request.headers

  if(!authorization) {
    return response.status(401).json({message: "Auth header does not exists"})
  }

  const token = authorization.replace('Bearer', '').trim()

  
  try{
    const data = jwt.verify(token, 'secret_key')

    const { id } = data as ITokenPayload

    request.accountId = id
    return next()
  } catch{
    return response.status(401).json({message: "Invalid token"})
  }
}

export default authMiddleware