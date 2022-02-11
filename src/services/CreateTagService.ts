import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagRepositories";

export class CreateTagService {
  async execute(name: string) {
    // vamos criar uma referencia do nosso repositorio para poder chama-lo

    const tagsRepositories = getCustomRepository(TagsRepositories);

    if(!name) {
      throw new Error("Incorrect Name!");
    }

    const tagAlreadyExists = await tagsRepositories.findOne({
      name
    });

    if(tagAlreadyExists) {
      throw new Error("Tag already exists!");
    }

    const createTag = tagsRepositories.create({
      name
    });

    await tagsRepositories.save(createTag);

    return createTag 
  }
}