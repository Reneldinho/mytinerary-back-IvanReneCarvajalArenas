import express from "express"

const serverSprint2 = express()

const port = 8080

const readySprint2 = console.log("Server is ready in port:", port);

serverSprint2.listen(port, readySprint2)

