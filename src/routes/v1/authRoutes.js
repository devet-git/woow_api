import { Router } from "express"
import authValidation from "../../validations/authValidation.js"
import authController from "../../controllers/authController.js"
const authRoutes = new Router();

authRoutes.route('/sign-up')
   .post(authValidation.signUp, authController.signUp)
authRoutes.route('/sign-in')
   .post(authValidation.signIn, authController.signIn)
export default authRoutes
