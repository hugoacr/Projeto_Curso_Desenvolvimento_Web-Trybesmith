import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/usersService';

class UsersController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    res.status(StatusCodes.CREATED).json(userCreated);
  };
}

export default UsersController;