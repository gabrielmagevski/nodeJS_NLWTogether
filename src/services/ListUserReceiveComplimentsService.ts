import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

export class ListUserReceiveComplimentsService {
  async execute(user_id: string) {
    const userReceiveCompliments = getCustomRepository(ComplimentsRepositories);

    const listCompliments = await userReceiveCompliments.find({
      where: {
        user_receiver: user_id
      }
    });

    return listCompliments
  }
}