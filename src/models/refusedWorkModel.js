import db from "../config/db.js"

const refusedWorkModel = {
   store: async (workId, userId) => {
      let sql = `INSERT INTO refused_works(work_id, refused_by) VALUES(?,?)`
      try {
         await db.query(sql, [workId, userId])
         return "Table \'refused_work\': 1 record inserted"
      } catch (error) {
         throw new Error(error)
      }
   }
}
export default refusedWorkModel