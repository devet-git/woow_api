import userModel from "../models/userModel.js"
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
      let { } = reqData
      let dbData = await userModel.store(reqData)
      return responseFormat.success(dbData)
   } catch (error) {
      throw new Error(error)
   }
}


const userService = { showAll, show, createNew }

export default userService
