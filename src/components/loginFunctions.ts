import jwt from 'jsonwebtoken';
import IUsers from '../interfaces/userInterface';
import ILogin from '../interfaces/loginInterface';

function convertUsers(users: IUsers[]) {
  const arrayOfUsers = new Set();
  for (let i = 0; i < users.length; i += 1) {
    arrayOfUsers.add(
      `${Object.values(users[i])[1]}-${Object.values(users[i])[4]}`,
    );
  }
  return Array.from(arrayOfUsers);
}
  
function userExist(users: IUsers[], login: ILogin[]) {
  const arrayOfLogin = `${Object.values(login)[0]}-${Object.values(login)[1]}`;
  if (!convertUsers(users).includes(arrayOfLogin)) {
    return [{ code: 401 }, { message: 'Username or password invalid' }];
  }
  const newToken = jwt
    .sign({ username: [login[0]][0] }, 'secret', { expiresIn: '1d', algorithm: 'HS256' });
  return [{ code: 200 }, { token: newToken }];
}

export default userExist;