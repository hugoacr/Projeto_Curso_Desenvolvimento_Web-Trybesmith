import { Request, Response, NextFunction } from 'express';
import schema from '../schemas/loginSchema';

export const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const login = req.body;
  const { error } = schema.validate(login);
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ message });
  }
  
  return next();
};

export default loginValidation;