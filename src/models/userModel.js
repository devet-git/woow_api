import db from "../config/db.js"
import model from "../config/model.js"
import { objectString } from "../utils/genString.js"


const userModel = Object.create(model)

userModel.registers = async () => {
   try {
      let sql = `SELECT work_id, user_id, real_name, phone_num
         FROM registered_works A
         INNER JOIN works B ON A.work_id=B.id
         inner JOIN users C ON A.user_id = C.id 
      `
      let [rows] = await db.execute(sql)
      return rows
   } catch (error) {
      throw new Error(error)
   }
}
userModel.store = async (data) => {
   try {
      let sql = `INSERT INTO users(${objectString(data).genKeys}) VALUES(${objectString(data).genCommas})`
      await db.execute(sql, Object.values(data))
      return "Added new user"
   } catch (error) {
      throw new Error(error)
   }
}

userModel.update = async (id, field, value) => {
   try {
      let sql = `UPDATE users SET ${field} = ? WHERE id = ?`
      await db.execute(sql, [value, id])
      return `Updated value at table users's ${field} field`
   } catch (error) {
      throw new Error(error)
   }
}

userModel.detele = async (id) => {
   let sql = "DELETE FROM users WHERE id = ?"
   try {
      await db.execute(sql, [id])
   } catch (error) {
      throw new Error(error)
   }
}

userModel.only = async (field, value) => {
   let sql = `SELECT * from users WHERE ${field} = ?`
   try {
      let [rows] = await db.execute(sql, [value])
      return rows.length == 1 ? true : false
   } catch (error) {
      throw new Error(error)
   }
}
userModel.basicInfo = async (field, value) => {
   let sql = `SELECT id, username, pw, real_name, phone_num, email, role FROM users WHERE ${field} = ?`
   try {
      let [rows] = await db.execute(sql, [value])
      return rows[0]
   } catch (error) {
      throw new Error(error)
   }
}
export default userModel
