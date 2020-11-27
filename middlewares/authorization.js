const {Recipe} = require('../models/index');

async function authorization(req, res, next) {
    const id = +req.params.id;
    try {
        const recipe = await Recipe.findByPk(id);
        if (!recipe) {
            return next({
                name: 'NotFound',
                msg: 'Error Not Found!'
            })
        } else if (recipe.UserId === req.loggedInUser.id) {
            next();
        } else {
            return next({
                name: 'NotAuthorized',
                msg: 'Not Authorized!'
            }) 
        } 
    } catch (err) {
        return next({
            name: 'InternalServerError',
            msg: err.message
        })
    }
}

module.exports = authorization