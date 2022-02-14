import { Request, Response } from 'express';
import { ListUserSenderComplimentsService } from '../services/ListUserSenderComplimentsService';

export class ListComplimentsSenderController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSenderCompliment = new ListUserSenderComplimentsService();
    
    const compliments = await listUserSenderCompliment.execute(user_id)

    return response.json(compliments);
  }
}