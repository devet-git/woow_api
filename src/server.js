import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const port = process.env.SERVER_PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/user', (req, res) => res.end("HELLO"))


app.listen(port, () => console.log(`Server started at http://localhost:${port}`))