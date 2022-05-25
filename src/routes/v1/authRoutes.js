import { Router } from "express"
import authValidation from "../../validations/authValidation.js"
import authController from "../../controllers/authController.js"
import authMiddleware from "../../middlewares/authMiddleware.js"
import getToken from "../../utils/getToken.js"
import { responseFormat } from "../../utils/format.js"


const authRoutes = new Router();

authRoutes.route('/sign-in')
   .post((req, res, next) => {
      let { authorization } = req.headers
      let accessToken = getToken(authorization)
      if (authorization) {
         try {
            jwt.verify(accessToken, process.env.ACCESS_KEY)
            return res.status(302).json(responseFormat.error(302))
         } catch (error) {
            next()
         }
      } else { next() }
   }, authValidation.signIn, authController.signIn)
authRoutes.route('/sign-up')
   .post(authValidation.signUp, authController.signUp)
authRoutes.post('/sign-out', authMiddleware.isSignIn, authController.signOut)
authRoutes.post('refresh-token', authMiddleware.refreshToken, authController.refreshToken)
export default authRoutes
