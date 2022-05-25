import Joi from 'joi'
import { responseFormat } from '../utils/format.js'

const createNew = async (req, res, next) => {
   const condition = Joi.object({
      poster: Joi.string().required(),
      name: Joi.string().required().min(5).trim(),
      location: Joi.string().required(),
      address: Joi.string().required().trim(),
      date: Joi.date().required().min('now'),
      salary: Joi.number().min(1).required(),
      quantity: Joi.number().min(1).max(100).required(),
      // time: Joi.string().regex(new RegExp(/^([0-9]{2}):([0-9]){2}$/)),
      note: Joi.string().trim().optional().allow('').allow(null)
   })

   try {
      await condition.validateAsync(req.body, { abortEarly: false })
      next()
   } catch (error) {
      res.status(400).json(responseFormat.error(400, new Error(error).message))
   }
}
const update = async (req, res, next) => {
   const condition = Joi.object({
      field: Joi.string().pattern(new RegExp(/^(?!.*id).*/)).required(),
      value: Joi.string().required()
   })

   try {
      await condition.validateAsync(req.body, { abortEarly: false })
      next()
   } catch (error) {
      res.status(400).json(responseFormat.error(400, new Error(error).message))
   }
}

const workValidation = { createNew, update }
export default workValidation
