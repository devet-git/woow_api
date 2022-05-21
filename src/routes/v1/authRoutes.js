import { Router } from "express"
import authValidation from "../../validations/authValidation.js"
import authController from "../../controllers/authController.js"
const authRoutes = new Router();

authRoutes.route('/login/phone-num')
   .post(authValidation.general, authController.phoneNumLogin)
authRoutes.route('/signin/phone-num')
   .post(authValidation.general, authController.phoneNumSignin)
export default authRoutes
