import Joi from 'joi';

export const validationLogin = Joi.object({
  username: Joi.string().required()
    .messages({
      'any.required': '400|"username" is required',
    }),
  password: Joi.string().required()
    .messages({
      'any.required': '400|"password" is required',
    }),
});

export default validationLogin;