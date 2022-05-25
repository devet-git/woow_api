import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import userModel from "../models/userModel.js"
import { responseFormat } from '../utils/format.js'
dotenv.config()


const signIn = async (reqData) => {
   try {
      const { username, pw } = reqData

      const userData = await userModel.basicInfo('username', username)
      if (!userData) return responseFormat.error(400, "This account is invalid")

      const isPwMatch = await bcrypt.compare(pw, userData.pw)
      if (!isPwMatch) return responseFormat.error(400, "This account is invalid")

      const accessToken = jwt.sign({ userId: userData.id }, process.env.ACCESS_KEY, { expiresIn: '45m' })
      const refreshToken = jwt.sign({ userId: userData.id }, process.env.REFRESH_KEY, { expiresIn: '7d' })

      await userModel.update(userData.id, 'refresh_token', refreshToken)

      delete userData.pw
      const resData = { accessToken, user: userData }
      return responseFormat.success(resData)
   } catch (error) {
      throw new Error(error)
   }
}

const signUp = async (reqData) => {
   let { username, realName, phoneNum, pw, repeatPw } = reqData
   try {
      let dbData = await userModel.only('username', username)
      if (!dbData && pw === repeatPw) {
         let salt = 11
         let hashedPw = await bcrypt.hash(pw, salt)

         await userModel.store({ id: uuidv4(), username: username, real_name: realName, phone_num: phoneNum, pw: hashedPw })
         return responseFormat.success("Account was created")
      } else {
         return responseFormat.error(400, "Account already exists")
      }
   } catch (error) {
      throw new Error(error)
   }
}

const signOut = async (userId) => {
   try {
      const dbData = await userModel.update(userId, 'refresh_token', null)
      return responseFormat.success(dbData)
   } catch (error) {
      throw new Error(error)
   }
}

const currentUser = async (userId) => {
   try {
      // console.log('f2', userId);
      let dbData = await userModel.basicInfo('id', userId)
      // console.log(dbData)
      if (dbData.length == 1)
         return responseFormat.success(dbData[0])
      else
         return responseFormat.error(403, "Must login")
   } catch (error) {
      throw new Error(error)
   }
}


const refreshToken = async (userId) => {
   try {
      let dbRefreshToken = await userModel.get({ table: 'users', fiels: 'id', value: userId })
      if (dbRefreshToken !== refreshToken) return responseFormat.error(403)
      let accessToken = jwt.sign({ userId }, process.env.ACCESS_KEY, { expiresIn: '45m' })
      let refreshToken = jwt.sign({ userId }, process.env.REFRESH_KEY, { expiresIn: '7d' })
      await userModel.update('refresh_token', refreshToken)
      return responseFormat.success({ tokens: { accessToken, refreshToken } })
   } catch (error) {
      throw new Error(error)
   }
}
const authService = { signUp, signIn, signOut, refreshToken, currentUser }
export default authService
