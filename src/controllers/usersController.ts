import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import UserService from '../services/usersService';

class UsersController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const newUser = await this.userService.create(user);

    const token = jwt.sign({ id: newUser.id }, 'secret', { expiresIn: '1d', algorithm: 'HS256' });
    res.status(StatusCodes.CREATED).json({ token });
  };
}

export default UsersController;