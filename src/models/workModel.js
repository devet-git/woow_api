import db from "../config/db.js"
import model from "../config/model.js"
import { objectString } from "../utils/genString.js"


const workModel = Object.create(model)
workModel.needApproval = async () => {
   let sql = `SELECT * from works A 
      WHERE id not in (select work_id from approved_works) 
      AND id not in (select work_id from refused_works)
   `
   try {
      let [rows] = await db.execute(sql)
      return rows
   } catch (error) {
      throw new Error(error)
   }
}
workModel.posted = async (userId) => {
   let sql = `select id, poster, name, note, quantity, salary, 
   location, address, DATE_FORMAT(date,'%d-%m-%Y') as date, posted_at
   from works 
   where poster = ?
   `
   try {
      let [rows] = await db.execute(sql, [userId])
      return rows
   } catch (error) {
      throw new Error(error)
   }
}
workModel.registered = async (userId) => {
   let sql = `select poster, work_id as id, name, note, quantity,salary,location,address, date,time,posted_at
      FROM registered_works A
      INNER join works B on A.work_id=B.id
      WHERE user_id = ?
   `
   try {
      let [rows] = await db.execute(sql, [userId])
      return rows
   } catch (error) {
      throw new Error(error)
   }
}
workModel.getValid = async (userId) => {
   let sql = `SELECT * 
      FROM v_approved_works 
      WHERE poster != ? AND id NOT IN (
         SELECT work_id FROM registered_works WHERE user_id = ?
   ) `
   try {
      let [rows] = await db.execute(sql, [userId, userId])
      return rows
   } catch (error) {
      throw new Error(error)
   }
}
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
