import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const authMiddleware = (req, res, next) => {
   let { authorization } = req.headers
   if (authorization) {
      let token = authorization.replace(/^Bearer/, "")
      try {
         let data = jwt.verify(token, process.env.SECRET_KEY)
         console.log(data);
         if (data.role == 'ADMIN')
            next()
         else
            res.json({ errors: "Not enough permission" })

      } catch (error) {
         res.status(400).json(new Error(error).message)
      }
   }
   else
      res.status(400).json({ errors: "NOT LOGIN" })
}
