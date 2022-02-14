import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagRepositories";

export class ListTagService {
  async execute(){
    const repositoryTag = getCustomRepository(TagsRepositories);

    const listTag = await repositoryTag.find();

    return listTag
  }
}