import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { responseFormat } from '../utils/format.js'

dotenv.config()


const phoneNumSignUp = async (reqData) => {
   let { phoneNum, pw, repeatPw, realName } = reqData
   try {
      let dbData = await userModel.check(phoneNum)

      if (dbData.length == 0 && pw == repeatPw) {
         let salt = 11
         let hashedPw = await bcrypt.hash(pw, salt)

         await userModel.store({ real_name: realName || null, phone_num: phoneNum, pw: hashedPw })
         return responseFormat.success("Account was created")
      } else {
         return responseFormat.error(400, "Account already exists")
      }
   } catch (error) {
      throw new Error(error)
   }
}
const phoneNumSignIn = async (reqData) => {
   let { phoneNum, pw } = reqData
   try {
      let dbData = await userModel.check(phoneNum)
      if (dbData.length == 1) {
         let isPwMatch = await bcrypt.compare(pw, dbData[0].pw)
         if (isPwMatch) {
            let token = jwt.sign({ userId: dbData[0].id, role: dbData[0].role }, process.env.SECRET_KEY, { expiresIn: 60 * 2 })
            let resData = { token, userID: dbData[0].id }
            return responseFormat.success(resData)
         }
      } else {
         return responseFormat.error(400, "This account is invalid")
      }
   } catch (error) {
      throw new Error(error)
   }
}

const authService = { phoneNumSignUp, phoneNumSignIn }
export default authService
