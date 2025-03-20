import express from "express"
import "dotenv/config.js"
import "./config/database.js"
import cors from "cors"
import morgan from "morgan"


const serverSprint2 = express()

const port = process.env.PORT || 8080


const readySprint2 = console.log("Server is ready in port:", port);

//CONFIGURACIONES BASICAS
serverSprint2.use(express.urlencoded({ extended: true }))
serverSprint2.use(express.json())
serverSprint2.use(cors())
serverSprint2.use(morgan("dev"))


//RUTAS


serverSprint2.listen(port, readySprint2)

