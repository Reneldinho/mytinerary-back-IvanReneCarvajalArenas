import City from "../../models/City.js"

let allCities = async (req,res,next)=>{
    try {
        let all = await City.find()
        return res.status(200).json({
            response:all
        })
    } catch (error) {
        return res.status(500).json({
            response:error
        })
    }
}

export default allCities