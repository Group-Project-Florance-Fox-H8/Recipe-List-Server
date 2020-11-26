const route = require("express").Router();
const ThirdPartyController = require("../controllers/ThirdPartyController");

route.get("/restaurants", ThirdPartyController.getRestaurants);
route.get("/recipes1", ThirdPartyController.getRecipes1); //mealDB
route.get("/recipes2", ThirdPartyController.getRecipes2); //edammam

module.exports = route;