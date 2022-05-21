import db from "../config/db.js"
import model from "../config/model.js"
import { objectString } from "../utils/genString.js"



const userModel = Object.create(model)

userModel.getAll = async () => {
   let sql = "SELECT * FROM users"
   return await db.execute(sql)
}

userModel.get = async (id = null) => {
   let sql = "SELECT * FROM users WHERE id = ?"
   return await db.execute(sql, [id])
}

userModel.insert = async (data) => {
   try {
      let sql = `INSERT INTO users(${objectString(data).genKeys}) VALUES(${objectString(data).genCommas})`
      await db.execute(sql, Object.values(data))
   } catch (error) {
      throw new Error(error)
   }
}

userModel.update = async (id, field, value) => {
   try {
      let sql = `UPDATE users SET ${field} = ? WHERE id = ?`
      await db.execute(sql, [value, id])
   } catch (error) {
      throw new Error(error)
   }

}

userModel.detele = async (id) => {
   let sql = "DELETE FROM users WHERE id = ?"
   await db.execute(sql, [id])
}

userModel.check = async (phoneNum) => {
   let sql = "SELECT * from users WHERE phone_num = ?"
   try {
      let [rows] = await db.execute(sql, [phoneNum])
      return rows
   } catch (error) {
      throw new Error(error)
   }
}
export default userModel
