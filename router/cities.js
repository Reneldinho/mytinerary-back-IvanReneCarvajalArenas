import { Router } from "express";
import { allCities, cityById } from "../controllers/cities/read.js";
import { createCity, createManyCities } from "../controllers/cities/create.js";


const routerCities = Router();

//Ruta para obtener todas las ciudades
routerCities.get("/allCities", allCities);

//Ruta para obtener una ciudad por id
routerCities.get("/cityById/:idParams", cityById);

//Ruta para crear una ciudad
routerCities.post("/createCity", createCity);

//Ruta para crear varias ciudades
routerCities.post("/createManyCities", createManyCities);


export default routerCities