import db from "../config/db.js"
import model from "../config/model.js"

const userModel = Object.create(model)

userModel.getAll = async () => {
   let sql = "SELECT * FROM users"
   return await db.execute(sql)
}

userModel.get = async (id = null) => {
   let sql = "SELECT * FROM users WHERE id = ?"
   return await db.execute(sql, [id])
}

userModel.insert = async (username, phoneNum, email = null) => {
   let sql = "INSERT INTO users(username, phone_num, email) VALUES(?, ?, ?)"
   await db.execute(sql, [username, phoneNum, email])
}

userModel.update = async (id, field, value) => {
   if (field !== 'id') {
      let sql = `UPDATE users SET ${field} = ? WHERE id = ?`
      await db.execute(sql, [value, id])
   } else {
      return new Error('Cant update id field');
   }
}

userModel.detele = async (id) => {
   let sql = "DELETE FROM users WHERE id = ?"
   await db.execute(sql, [id])
}
export default userModel
