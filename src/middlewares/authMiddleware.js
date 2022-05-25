import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const authMiddleware = async (req, res, next) => {
   let { authorization } = req.headers
   if (authorization) {
      try {
         let accessToken = authorization.replace(/^Bearer/, "")
         let data = await jwt.verify(accessToken, process.env.SECRET_KEY)
         console.log(data);
         // if (data.role == 'ADMIN')
         //    next()
         // else
         //    res.status(403).json({ errors: "Not enough permission" })
         next()
      } catch (error) {
         res.status(401).json(new Error(error).message)
      }
   }
}
