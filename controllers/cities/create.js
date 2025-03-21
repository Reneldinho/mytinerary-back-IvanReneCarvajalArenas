import City from '../../models/City.js';

let createCity = async (req, res, next) => {
    try {
        let cityInfo = req.body;
        let createNewCity = await City.create(cityInfo);
        return res.status(201).json({
            response: createNewCity
        });
    } catch (error) {
        return res.status(500).json({
            response: error
        });
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
        return res.status(500).json({
            response: error
        });
    }
};

export { createCity, createManyCities };