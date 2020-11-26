const express = require('express')
const router = express.Router()
const recipeRoutes = require("./recipeRoutes");
const routeUsers = require('./users')
const authentication = require("../middlewares/authentication");
const thirdPartyRoutes = require("../routers/thirdPartyRoutes");

router.use('/', routeUsers)

router.use(authentication);
router.use("/recipes", recipeRoutes);
router.use(thirdPartyRoutes);

module.exports = router