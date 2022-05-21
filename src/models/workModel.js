import db from "../config/db.js"
import model from "../config/model.js"

const workModel = Object.create(model)
// workModel.getAll('users')
// workModel.getAll = async () => {
//    let sql = "SELECT * FROM users"
//    return await db.execute(sql)
// }

// workModel.get = async (id = null) => {
//    let sql = "SELECT * FROM users WHERE id = ?"
//    return await db.execute(sql, [id])
// }

workModel.store = async (data) => {
   let sql = "INSERT INTO works(title, description, date) VALUES(?, ?, ?)"
   try {
      await db.execute(sql, [data.title, data.description, data.date])
      return "Saved new work"
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
