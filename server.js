import express from "express"
import "dotenv/config.js"

const serverSprint2 = express()

const port = process.env.PORT || 8080


const readySprint2 = console.log("Server is ready in port:", port);

serverSprint2.listen(port, readySprint2)

