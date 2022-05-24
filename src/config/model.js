import db from "./db.js"

const model = {
   getAll: async (data) => {
      let sql = `SELECT * FROM ${data.table}`
      try {
         let [rows] = await db.execute(sql)
         return rows
      } catch (error) {
         throw new Error(error)
      }
   },
   get: async (data) => {
      let sql = `SELECT * FROM ${data.table} WHERE ${data.field} = ?`
      try {
         let [rows] = await db.execute(sql, [data.value])
         return rows
      } catch (error) {
         throw new Error(error)
      }
   },
   store: async () => { },
   update: async () => { },
   delete: async (tableName, conditon = { field, value }) => {
      let sql = `DELETE FROM ${tableName} WHERE ${conditon.field} = ?`
      try {
         await db.execute(sql, [conditon.value])
      } catch (error) {
         throw new Error(error)
      }
   },
}
export default model
