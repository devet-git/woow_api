import express from "express"
import dotenv from "dotenv"
import APIv1 from './routes/v1/index.js'
import notFoundRouter from "./routes/v1/notFound.js"

const app = express()
const port = process.env.SERVER_PORT;

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1', APIv1)
app.use(notFoundRouter)

app.listen(port, () => console.log(`Server started at http://localhost:${port}`))
