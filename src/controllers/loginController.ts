import { Request, Response } from 'express';
import UserService from '../services/usersService';
import userExist from '../components/loginFunctions';

class LoginController {
  constructor(private userService = new UserService()) { }

  public getAll = async (req: Request, res: Response) => {
    const login = req.body;

    const users = await this.userService.getAll();

    const response = userExist(users, login);
    console.log(response);
    res.status(Number(Object.values(response[0])[0]))
      .json(response[1]);
  };
}

export default LoginController;