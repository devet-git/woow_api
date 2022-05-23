import db from "../config/db.js"
import model from "../config/model.js"
import { objectString } from "../utils/genString.js"


const workModel = Object.create(model)

workModel.store = async (data) => {
   let sql = `INSERT INTO works(${objectString(data).genKeys}) VALUES(${objectString(data).genCommas})`
   try {
      await db.execute(sql, Object.values(data))
      return "New work was saved"
   } catch (error) {
      throw new Error(error)
   }
}

workModel.update = async (id, field, value) => {
   let sql = `UPDATE works SET ${field} = ? WHERE id = ${id}`
   try {
      await db.execute(sql, [value])
      return `the work with ID=${id} has been updated `
   } catch (error) {
      throw new Error(error)
   }
}

workModel.detele = async (id) => {
   let sql = "DELETE FROM works WHERE id = ?"
   try {
      await db.execute(sql, [id])
      return `Deleted works with ID  = ${id}`
   } catch (error) {
      throw new Error(error)
   }
}
export default workModel
