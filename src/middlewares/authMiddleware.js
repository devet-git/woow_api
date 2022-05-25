import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { responseFormat } from '../utils/format.js'
import getToken from '../utils/getToken.js'
dotenv.config()



const authMiddleware = {
   isSignIn(req, res, next) {
      const { authorization } = req.headers
      if (!authorization) return res.status(403).json(responseFormat.error(403))
      const accessToken = getToken(authorization)
      if (!accessToken) return res.status(403).json(responseFormat.error(403))
      try {
         let data = jwt.verify(accessToken, process.env.ACCESS_KEY)
         req.userId = data.userId
         next()
      } catch (error) {
         return res.status(401).json(responseFormat.error(401, new Error(error).message))
      }
   },

   signInFalse(req, res, next) {
      let { authorization } = req.headers
      if (authorization) {
         try {
            let accessToken = authorization.replace(/^Bearer/, "")
            jwt.verify(accessToken, process.env.SECRET_KEY)
            res.status(404).json(responseFormat.error(404))
         } catch (error) {
            next()
         }
      }
   }
   ,
   refreshToken(req, res, next) {
      try {
         const { refreshToken } = req.body
         const data = jwt.verify(refreshToken, process.env.REFRESH_KEY)
         req.userId = data.userId
         next()
      } catch (error) {
         return res.status(403).json(responseFormat.error(403, new Error(error).message))
      }
   }
}
export default authMiddleware