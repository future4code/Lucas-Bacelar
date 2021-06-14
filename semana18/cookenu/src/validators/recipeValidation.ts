import { body } from 'express-validator'

export const recipeSchema = [
  body('title')
    .notEmpty()
    .withMessage('Title must not be empty')
    .isString()
    .withMessage('Title must be a valid string'),
  body('description')
    .isString()
    .withMessage('Description must be a string')
    .isEmpty()
    .withMessage('Description must not be empty'),
]

export const editRecipeSchema = [
  body('title')
    .optional()
    .notEmpty()
    .withMessage('Title must not be empty')
    .isString()
    .withMessage('Title must be a valid string'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string')
    .isEmpty()
    .withMessage('Description must not be empty'),
  body().custom((innerBody) => {
    if (!innerBody.title && !innerBody.description) {
      return Promise.reject('At least one field must be filled')
    }
  }),
]
