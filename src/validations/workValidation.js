import Joi from 'joi'


const createNew = async (req, res, next) => {
   const condition = Joi.object({
      title: Joi.string().required().min(15),
      description: Joi.string().required().min(20),
      date: Joi.date().required().min('now')
   })

   try {
      await condition.validateAsync(req.body, { abortEarly: false })
      next()
   } catch (error) {
      res.status(400).json({
         status: 400, success: false,
         errors: new Error(error).message
      })
   }
}
const update = async (req, res, next) => {
   const condition = Joi.object({
      field: Joi.string().pattern(new RegExp(/^(?!.*id).*/)),
      value: Joi.string()
   })

   try {
      await condition.validateAsync(req.body, { abortEarly: false })
      next()
   } catch (error) {
      res.status(400).json({
         status: 400, success: false,
         errors: new Error(error).message
      })
   }
}

const workValidation = { createNew, update }
export default workValidation
