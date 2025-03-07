import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()
const PORT = process.env.PORT 

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

import userRouter from "./routes/user.route.js"

app.use("/users",userRouter)

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is running on the port ${PORT}`)
})