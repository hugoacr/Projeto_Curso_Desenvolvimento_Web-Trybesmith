import { Request, Response, NextFunction } from 'express';
import schema from '../schemas/userSchema';

export const usersValidation = (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  const { error } = schema.validate(user);
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ message });
  }
  
  return next();
};

export default usersValidation;

// Estava tentando seguir um caminho, mas não consegui chegar até o final.
// const properties: string[] = ['username', 'classe', 'level', 'password'];

// function validateStringShort(entry: string): string | null {
//   if (typeof entry !== 'string') {
//     return 'must be a string';
//     // return `"${entry[0]}" must be a string`;
//   }
//   if (entry.length < 2) {
//     return 'length must be at least 3 characters long';
//   }
//   return 'StringShort';
// }
  
// function validateStringLong(entry: string): string | null {
//   if (typeof entry !== 'string') {
//     return 'must be a string';
//   }
//   if (entry.length < 7) {
//     return 'length must be at least 8 characters long';
//   }
//   return 'StringLong';
// }
  
// function validateNumberShort(entry: string): string | null {
// //   const [property, value] = entry;
//   if (typeof entry !== 'number') {
//     return 'must be a number';
//   }
//   if (entry < 0) {
//     return 'must be greater than or equal to 1';
//   }
//   return 'NumberShort';
// }

// const listfuncions = {
//   username: validateStringShort,
//   classe: validateStringShort,
//   level: validateNumberShort,
//   password: validateStringLong,
// };

// function validateProperties(product: IUser): [boolean, string | null] {
//   for (let i = 0; i < properties.length; i += 1) {
//     if (!Object.prototype.hasOwnProperty.call(product, properties[i])) {
//       return [false, properties[i]];
//     }
//   }
//   return [true, null];
// }

// function validateValues(product: IUser): [boolean, string | null] {
//   const entries = Object.entries(product);
//   for (let i = 0; i < entries.length; i += 1) {
//     const [property, value] = entries[i];
//     const test = property as keyof typeof listfuncions;
//     if (entries) { 
//       const message: [boolean, string | null] = [
//         false, `"${test}" ${listfuncions[test](value)} ${i}`,
//       ];
//       return message;
//     }
//   }
//   return [true, null];
// }

// function validationUser(req: Request, res: Response, next: NextFunction) {
//   const product: IUser = req.body;

//   let [valid, property] = validateProperties(product);

//   if (!valid) {
//     return res.status(StatusCodes.BAD_REQUEST).json({ message: `"${property}" is required` });
//   }

//   [valid, property] = validateValues(product);

//   if (!valid) {
//     return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
//       .json({ message: `${property}` });
//   }

//   next();
// }
