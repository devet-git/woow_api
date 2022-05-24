import { Router } from "express"
import authValidation from "../../validations/authValidation.js"
import authController from "../../controllers/authController.js"
const authRoutes = new Router();

authRoutes.route('/sign-up/phone-num')
   .post(authValidation.general, authController.phoneNumSignUp)
authRoutes.route('/sign-in/phone-num')
   .post(authValidation.general, authController.phoneNumSignIn)
export default authRoutes
