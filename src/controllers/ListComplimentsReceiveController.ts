import { Request, Response } from 'express';
import { ListUserReceiveComplimentsService } from '../services/ListUserReceiveComplimentsService';

export class ListComplimentsReceiveController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserReceiveCompliment = new ListUserReceiveComplimentsService();

    const compliments = await listUserReceiveCompliment.execute(user_id);

    return response.json(compliments);
  }
}