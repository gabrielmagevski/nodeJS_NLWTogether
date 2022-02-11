import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IauthenticationToken { 
  email: string;
  password: string;
}

export class AuthenticationToken {
  async execute({ email, password }: IauthenticationToken){
    const userRepositories = getCustomRepository(UsersRepositories);
    
    //verificar se o email existe 
    const user = await userRepositories.findOne({
      email
    })

    if(!user) {
      throw new Error("Email/password incorrect");
    }

    //verificar se a senha bate
    const passwordMatch = await compare(password, user.password);
    
    if(!passwordMatch) {
      throw new Error("Email/password incorrect");
    }

    //gerar um token
    const token = sign({
      email: user.email
    },
      "ca9a8969d5cd57d87e2f9662ebf7e5af", {
        subject: user.id,
        expiresIn: "1d"
      }
    )
    return token;
  }
}