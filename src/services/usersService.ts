import connection from '../models/connection';
import UserModel from '../models/usersModel';
import IUser from '../interfaces/userInterface';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(user: IUser): Promise<IUser> {
    return this.model.create(user);
  }
}

export default UserService;