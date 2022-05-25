import authService from "../services/authService.js"
import { responseFormat } from "../utils/format.js"

const authController = {
   async signIn(req, res) {
      try {
         let result = await authService.signIn(req.body)
         res.status(result.statusCode).json({ ...result })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   },

   async signUp(req, res) {
      try {

         let result = await authService.signUp(req.body)
         res.status(result.statusCode).json({ ...result })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   },
   async signOut(req, res) {
      try {
         let { userId } = req
         let result = await authService.signOut(userId)
         res.status(result.statusCode).json({ ...result })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   },

   async refreshToken(req, res) {
      try {
         let response = await authService.refreshToken(req.userId)
         res.status(response.statusCode).json({ ...response })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   },

   async phoneNumSignUp(req, res) {
      try {
         let response = await authService.phoneNumSignUp(req.body)
         res.status(response.statusCode).json({ ...response })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   },
   async phoneNumSignIn(req, res) {
      try {
         let response = await authService.phoneNumSignIn(req.body)
         res.status(response.statusCode).json({ ...response })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   },
   async currentUser(req, res) {
      try {
         let response = await authService.currentUser(req.userId)
         res.status(response.statusCode).json({ ...response })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   }
}
export default authController
