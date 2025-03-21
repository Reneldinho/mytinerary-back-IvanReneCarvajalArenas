import City from "../../models/City.js"

let allCities = async (req, res, next) => {
    try {
        let all = await City.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}


let cityById = async (req, res, next) => {
    try {
        let idQuery = req.params.idParams;
        let cityId = await City.findById(idQuery);
        return res.status(200).json({
            response: cityId
        });
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
};

export { allCities, cityById }