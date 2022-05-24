import workModel from "../models/workModel.js"
import { responseFormat } from "../utils/format.js"


const showAll = async () => {
   try {
      let dbData = await workModel.getAll({ table: 'works' })
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
      // let { } = data
      console.log(reqData);
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
const workService = { showAll, show, createNew, update, deleteOne }
export default workService
