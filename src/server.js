import express from "express"
import dotenv from "dotenv"
import APIv1 from './routes/v1/index.js'
const app = express()
const port = process.env.SERVER_PORT;

dotenv.config()
app.use(express.json()) // For json datatype
app.use(express.urlencoded({ extended: true })) // for form submit
app.use('/api/v1', APIv1) // For routes

app.listen(port, () => console.log(`Server started at http://localhost:${port}`))