import { Request, Response } from 'express';
import { AuthenticationToken } from '../services/AuthenticationToken';

export class AuthenticationController{
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticationToken = new AuthenticationToken()

    const token = await authenticationToken.execute({ email, password })

    return response.json(token);
  }
}