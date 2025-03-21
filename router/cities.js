import { Router } from "express";
import allCities from "../controllers/cities/read.js";


const routerCities = Router();

routerCities.get("/allCities", allCities)


export default routerCities