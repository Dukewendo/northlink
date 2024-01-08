import {Controller, Get} from "@overnightjs/core";
import {Request, Response} from "express";
import UserJSON from '../database/users.json'

@Controller('user')
export class UserController {

  @Get()
  async getAllMinimalUsers(req: Request, res: Response) {
    const minimalUsers = UserJSON.map(user => ({
      id: user.id,
      name: user.name,
    }));
    res.status(200).json(minimalUsers);
  }

  @Get(':userId')
  async getFullUserById(req: Request, res: Response) {
    const filteredUsers = UserJSON.filter(user => user.id.toString() === req.params.userId);
    if (filteredUsers.length > 0) {
      res.status(200).json(filteredUsers[0]);
    } else {
      res.status(404).json({
        error: 'User not found.'
      });
    }
  }
}