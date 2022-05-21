import workModel from "../models/workModel.js"

const showAll = async () => {
   try {
      return await workModel.getAll({ table: 'works' })
   } catch (error) {
      throw new Error(error)
   }
}
const show = async (data) => {
   try {
      return await workModel.get(data)
   } catch (error) {
      throw new Error(error)
   }
}
const createNew = async (data) => {
   try {
      return await workModel.store(data)
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
