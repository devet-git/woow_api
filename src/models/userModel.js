import db from "../config/db.js"
import model from "../config/model.js"

const userModel = Object.create(model)

userModel.select = (id = null) => {
   let sql = id ? "SELECT * FROM works WHERE id = ?" : "SELECT * FROM works"
   let result = new Promise((resolve, reject) => {
      db.query(sql, [id], (err, data) => {
         if (err) reject(err)
         resolve(data)
      })
   })
   return result
}

userModel.insert = (title) => {
   let sql = "INSERT INTO works(title) VALUES(?)"
   let result = new Promise((resolve, reject) => {
      db.query(sql, [title], (err) => {
         if (err) throw err
         resolve("Insert user successfully!!")
         reject("Can not insert new user!!")
      })
   })
   return result
}

userModel.update = (id, title) => {
   let sql = "UPDATE works SET title = ? WHERE id = ?"
   let result = new Promise((resolve, reject) => {
      db.query(sql, [title, id], (err) => {
         if (err) reject(err)
         resolve(`Updated user with id ${id}`)
      })
   })
   return result
}

userModel.detele = (id) => {
   let sql = "DELETE FROM works WHERE id = ?"
   let result = new Promise((resolve, reject) => {
      db.query(sql, [id], (err) => {
         if (err) reject(err)
         resolve(`Deleted user with id ${id}`)
      })
   })
   return result
}
export default userModel