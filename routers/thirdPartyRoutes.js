const route = require("express").Router();
const ThirdPartyController = require("../controllers/ThirdPartyController");

route.get("/restaurants", ThirdPartyController.getRestaurants);
route.get("/mealDB", ThirdPartyController.mealDB);
route.post("/edamam", ThirdPartyController.edamam);

module.exports = route;