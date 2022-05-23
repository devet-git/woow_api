import controller from "../config/controller.js"
import authService from "../services/authService.js"
import { responseFormat } from "../utils/format.js"


const authController = Object.create(controller)

authController.phoneNumSignUp = async (req, res) => {
   try {
      let response = await authService.phoneNumSignUp(req.body)
      res.status(response.statusCode).json({ ...response })
   } catch (error) {
      res.status(500).json(responseFormat.error(500))
   }
}
authController.phoneNumSignIn = async (req, res) => {
   try {
      let response = await authService.phoneNumSignIn(req.body)
      res.status(response.statusCode).json({ ...response })
   } catch (error) {
      res.status(500).json(responseFormat.error(500))
   }
}
authController.google = async () => {
   try {

   } catch (error) {
      res.status(500).json(responseFormat.error(500))
   }
}
export default authController
