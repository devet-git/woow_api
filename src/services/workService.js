import { responseFormat } from "../utils/format.js"
import workModel from "../models/workModel.js"
import registeredWorkModel from "../models/registeredWorkModel.js"
import approvedWorkModel from "../models/approvedWorkModel.js"
import refusedWorkModel from "../models/refusedWorkModel.js"
const showAll = async () => {
   try {
      let dbData = await workModel.getAll({ table: 'v_approved_works' })
      return responseFormat.success(dbData)
   } catch (error) {
      throw new Error(error)
   }
}
const showValid = async (userId) => {
   try {
      let dbData = await workModel.getValid(userId)
      return responseFormat.success(dbData)
   } catch (error) {
      throw new Error(error)
   }
}
const register = async (userId, workId) => {
   try {
      let isExist = await registeredWorkModel.isset(userId, workId)
      if (!isExist) {
         let dbData = await registeredWorkModel.insert(userId, workId)
         return responseFormat.success(dbData)
      } else
         return responseFormat.error(400, 'You registered this work')
   } catch (error) {
      throw new Error(error)
   }
}
const approve = async (workId, userId) => {
   try {
      let dbData = await approvedWorkModel.store(workId, userId)
      return responseFormat.success(dbData)
   } catch (error) {
      throw new Error(error)
   }
}
const refuse = async (workId, userId) => {
   try {
      let dbData = await refusedWorkModel.store(workId, userId)
      return responseFormat.success(dbData)
   } catch (error) {
      throw new Error(error)
   }
}
const show = async (data) => {
   try {
      const dbData = await workModel.get(data)
      return responseFormat.success(dbData)
   } catch (error) {
      throw new Error(error)
   }
}
const createNew = async (reqData) => {
   try {
      // console.log(reqData)
      let dbData = await workModel.store(reqData)
      return responseFormat.success(dbData)
   } catch (error) {
      throw new Error(error)
   }
}
const update = async (data) => {
   let { id, field, value } = data
   try {
      return await workModel.update(id, field, value)
   } catch (error) {
      throw new Error(error)
   }
}
const deleteOne = async (data) => {
   try {
      return await workModel.detele(data)
   } catch (error) {
      throw new Error(error)
   }
}
const workService = { showAll, showValid, userRegister: register, approve, refuse, show, createNew, update, deleteOne }
export default workService
