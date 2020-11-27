const route = require("express").Router();
const authorization = require("../middlewares/authorization");
const RecipeController = require("../controllers/RecipeController");

route.post("/", RecipeController.add);
route.get("/", RecipeController.read);

route.use("/:id", authorization)
route.get("/:id", RecipeController.findByPk);
route.put("/:id", RecipeController.put);
route.delete("/:id", RecipeController.delete);

module.exports = route;