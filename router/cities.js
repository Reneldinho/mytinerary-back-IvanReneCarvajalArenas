import { Router } from "express";
import { allCities, cityByid } from "../controllers/cities/read.js";


const routerCities = Router();

//Ruta para obtener todas las ciudades
routerCities.get("/allCities", allCities);

//Ruta para obtener una ciudad por id
routerCities.get("/cityByid/:idParams", cityByid);


export default routerCities