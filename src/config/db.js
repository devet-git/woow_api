// import mysql from "mysql"
import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config()
const db = await mysql.createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USERNAME,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_DATABASE
})

export default db
