import { Schema, model } from "mongoose"

let collection = "cities"
let schema = Schema({
    cityName: { type: String, required: true },
    cityCountry: { type: String, required: true },
    cityPhoto: { type: String, required: true },
    cityDescription: { type: String, required: true },
    localCurrency: { type: String, required: true },
    importantRestaurants: { type: String, required: true },
    importantAttractions: { type: String, required: true },
    mainParks: { type: String, required: true },
    notableTouristSities: { type: String, required: true },
    importanHotels: { type: String, required: true }
}, {
    timestamps: true
});

let City = model(collection, schema);

export default City;