import { Response, Request, NextFunction } from "express";
import { verify } from 'jsonwebtoken';

interface Ipayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
){

  //receber o token
  const authToken = request.headers.authorization;
  
  //validar se o token esta preenchido
    if(!authToken) {
      return response.status(401).end();
    }

  //validar se o token e válido

  const [, token] = authToken.split(" ");

  try{
    const { sub } = verify(token, "ca9a8969d5cd57d87e2f9662ebf7e5af") as Ipayload;

    //recuperar os dados do usuário
    request.user_id = sub;

    return next();

  }catch(err){
    return response.status(401).end();
  }
}

// estou usando split para separar o bearer do token e no [, token] estou atribuindo
// a segunda posição do array pro token