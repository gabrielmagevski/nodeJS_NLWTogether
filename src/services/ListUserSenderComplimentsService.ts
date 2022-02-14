import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

export class ListUserSenderComplimentsService {
  async execute(user_id: string) {
    const listSenderCompliments = getCustomRepository(ComplimentsRepositories);

    const listCompliments = await listSenderCompliments.find({
      where: {
        user_sender: user_id
      }
    });

    return listCompliments;
  }
}