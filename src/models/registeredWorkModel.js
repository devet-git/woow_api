import db from '../config/db.js'


const registeredWorkModel = {
   isset: async (userId, workId) => {
      let sql = `select id from registered_works where user_id = ? AND work_id = ?`
      try {
         let [rows] = await db.execute(sql, [userId, workId])
         return (rows.length === 0) ? false : true
      } catch (error) {
         throw new Error(error)
      }
   },
   insert: async (userId, workId) => {
      let sql = `INSERT INTO registered_works(user_id, work_id) VALUES(?,?)`
      try {
         await db.execute(sql, [userId, workId])
         return "Added user"
      } catch (error) {
         throw new Error(error)
      }
   }

}
export default registeredWorkModel