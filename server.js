import express from "express"
import "dotenv/config.js"
import "./config/database.js"
import cors from "cors"
import morgan from "morgan"
import routerIndex from "./router/index.js"
import Bad_Request from "./middlewares/error_400.js"
import not_found from "./middlewares/error_404.js"
import internal_server_error from "./middlewares/error_500.js"


//SERVIDOR
const serverSprint2 = express()

const port = process.env.PORT || 8080

const readySprint2 = console.log("Server is ready in port:", port);


//CONFIGURACIONES BASICAS
serverSprint2.use(express.urlencoded({ extended: true }))
serverSprint2.use(express.json())
serverSprint2.use(cors())
serverSprint2.use(morgan("dev"))

//ENRUTADOR
serverSprint2.use("/api", routerIndex)

//MIDDLEWARES DE MANEJO DE ERRORES
serverSprint2.use(Bad_Request)
serverSprint2.use(not_found)
serverSprint2.use(internal_server_error)



serverSprint2.listen(port, readySprint2)

