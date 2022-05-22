import Joi from 'joi'


const general = async (req, res, next) => {
   const condition = Joi.object({
      realName: Joi.string(),
      phoneNum: Joi.string().required().min(10).max(10),
      pw: Joi.string().required().min(8),
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


const authValidation = { general }
export default authValidation
