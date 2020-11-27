const axios = require("axios");

class ThridPartyController {
    static async getRestaurants(req, res, next) {
        try {   
            const response = await axios({
                url: `https://developers.zomato.com/api/v2.1/search?collection_id=306459&sort=rating`,
                headers: {
                    "user-key": process.env.USER_KEY
                },
                method: "GET"
            });
            // console.log(response.data);
            res.status(200).json(response.data);
        } catch (err) {
            next(err);
        }
    }

    static async mealDB(req, res, next) {
        try {   
            const response = await axios({
                url: `https://www.themealdb.com/api/json/v1/1/random.php`,
                method: "GET"
            });
            // console.log(response.data);
            res.status(200).json(response.data);
        } catch (err) {
            next(err);
        }
    }

    static async edamam(req, res, next) {
        const keyword = req.body.food;     
        const YOUR_APP_ID = process.env.APP_ID;
        const YOUR_APP_KEY = process.env.APP_KEY;
        const response = await axios({
            url: `https://api.edamam.com/search?q=${keyword}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`,
            method: "GET"
        });
        // console.log(response.data);
        res.status(200).json(response.data);
    } catch (err) {
        next(err);
    }
}

module.exports = ThridPartyController;