import Joi from 'joi'
import { responseFormat } from '../utils/format.js'

const signIn = async (req, res, next) => {
	const condition = Joi.object({
		username: Joi.string().required(),
		pw: Joi.string().required().min(8)
	})

	try {
		await condition.validateAsync(req.body, { abortEarly: false })
		next()
	} catch (error) {
		res.status(400).json(responseFormat.error(400, new Error(error).message))
	}
}
const signUp = async (req, res, next) => {
	const condition = Joi.object({
		username: Joi.string().required(),
		realName: Joi.string().required(),
		phoneNum: Joi.string().length(10).pattern(new RegExp('^[0-9]+$')).required(),
		pw: Joi.string().min(8).required(),
		repeatPw: Joi.string().required().valid(Joi.ref('pw'))
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

const authValidation = { signIn, signUp }
export default authValidation
