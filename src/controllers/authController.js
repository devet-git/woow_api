import controller from "../config/controller.js"
import authService from "../services/authService.js"
import { responseFormat } from "../utils/format.js"


const authController = Object.create(controller)

authController.phoneNumSignin = async (req, res) => {
   try {
      let response = await authService.phoneNumSignin(req.body)
      res.status(response.statusCode).json({ ...response })
   } catch (error) {
      res.status(500).json(responseFormat.error(500))
   }
}
authController.phoneNumLogin = async (req, res) => {
   try {
      let response = await authService.phoneNumLogin(req.body)
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
