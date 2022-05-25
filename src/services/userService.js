import userModel from "../models/userModel.js"
import workModel from "../models/workModel.js"

import { responseFormat } from "../utils/format.js"

const showAll = async () => {
   try {
      let dbData = await userModel.getAll({ table: 'users' })
      return responseFormat.success(dbData)
   } catch (error) {
      throw new Error(error)
   }
}
const show = async (reqData) => {
   try {
      let dbData = await userModel.get(reqData)
      return responseFormat.success(dbData)
   } catch (error) {
      throw new Error(error)
   }
}
const createNew = async (reqData) => {
   try {
      // let { } = reqData
      let dbData = await userModel.store(reqData)
      return responseFormat.success(dbData)
   } catch (error) {
      throw new Error(error)
   }
}
const account = async (userId) => {
   try {
      let userData = await userModel.basicInfo('id', userId)
      let registeredWorks = await workModel.registered(userId)
      let postedWorks = await workModel.posted(userId)
      let registers = await userModel.registers()
      let needApprovalWorks = await workModel.needApproval()
      delete userData.pw
      return responseFormat.success({ ...userData, postedWorks: { works: postedWorks, registers }, registeredWorks, needApprovalWorks })
   } catch (error) {
      throw new Error(error)
   }
}
const changePassword = async (userId, reqData) => {
   const { currentPw, newPw, confirmNewPw } = reqData
   try {
      const userinfo = await userModel.basicInfo('id', userId)
      console.log('changer pw service', userinfo)
      const dbData = await userModel.update(userId, 'pw', newPw)
      return responseFormat.success({ ...dbData })
   } catch (error) {
      throw new Error(error)
   }
}

const userService = { showAll, show, createNew, account, changePassword }

export default userService
