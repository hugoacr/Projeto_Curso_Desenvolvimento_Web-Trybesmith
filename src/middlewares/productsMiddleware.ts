import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IProduct from '../interfaces/productInterface';

const properties = ['name', 'amount'];
const typeErro = ['must be a string', 'length must be at least 3 characters long'];

function validateProperties(product: IProduct): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(product, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
}

function validateValues(product: IProduct): [boolean, string | null] {
  const entries = Object.entries(product);
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if (typeof value !== 'string') {
      return [false, `"${property}" ${typeErro[0]}`];
    }
    if (value.length < 2) {
      return [false, `"${property}" ${typeErro[1]}`];
    }
  }
  return [true, null];
}

function validationProduct(req: Request, res: Response, next: NextFunction) {
  const product: IProduct = req.body;

  let [valid, property] = validateProperties(product);

  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: `"${property}" is required` });
  }

  [valid, property] = validateValues(product);

  if (!valid) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: `${property}` });
  }

  next();
}

export default validationProduct;