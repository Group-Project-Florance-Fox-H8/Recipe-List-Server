const axios = require("axios");

class ThridPartyController {
    static async getRestaurants(req, res, next) {
        try {   
            const response = await axios({
                url: `https://developers.zomato.com/api/v2.1/search?collection_id=306459&sort=rating`,
                headers: {
                    "user-key": "c00658789a3d3af86fc738ec0e820c8f"
                },
                method: "GET"
            });
            console.log(response.data);
            res.json(response.data);
        } catch (err) {
            next(err);
        }
    }

    static async getRecipes1(req, res, next) {
        try {   
            const response = await axios({
                url: `https://www.themealdb.com/api/json/v1/1/random.php`,
                method: "GET"
            });
            console.log(response.data);
            res.json(response.data);
        } catch (err) {
            next(err);
        }
    }

    static async getRecipes2(req, res, next) {
        const keyword = "beef";     //ini diganti req.body.food
        const YOUR_APP_ID = "35783e5b";
        const YOUR_APP_KEY = "33d13f3e08f3c530de88c53fceb5219f";
        const response = await axios({
            url: `https://api.edamam.com/search?q=${keyword}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`,
            method: "GET"
        });
        console.log(response.data);
        res.json(response.data);
    } catch (err) {
        next(err);
    }
}

module.exports = ThridPartyController;