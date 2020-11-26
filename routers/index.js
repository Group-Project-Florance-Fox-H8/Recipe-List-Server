const express = require('express')
const router = express.Router()
const recipeRoutes = require("./recipeRoutes");
const routeUsers = require('./users')
const authentication = require("../middlewares/authentication");

router.use('/', routeUsers)

router.use(authentication);
router.use("/recipes", recipeRoutes);

module.exports = router