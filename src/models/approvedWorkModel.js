import db from "../config/db.js"

const approvedWorkModel = {
   store: async (workId, userId) => {
      let sql = `INSERT INTO approved_works(work_id, approved_by) VALUES(?,?)`
      try {
         await db.query(sql, [workId, userId])
         return "Table \'approved_work\': 1 record inserted"
      } catch (error) {
         throw new Error(error)
      }
   }
}
export default approvedWorkModel