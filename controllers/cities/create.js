import City from '../../models/City.js';

let createCity = async (req, res, next) => {
    try {
        let cityInfo = req.body;
        let createNewCity = await City.create(cityInfo);
        return res.status(201).json({
            response: createNewCity
        });
    } catch (error) {
        next(error)
    }
};

let createManyCities = async (req, res, next) => {
    try {
        let citiesInfo = req.body;
        let createNewCities = await City.insertMany(citiesInfo);
        return res.status(201).json({
            response: createNewCities
        });
    } catch (error) {
        next(error)
    }
};

export { createCity, createManyCities };