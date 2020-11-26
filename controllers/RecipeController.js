const { Recipe } = require("../models");

class RecipeController {
    static add(req, res, next) {
        const obj = {
            name: req.body.name,
            type: req.body.type,
            ingredients: req.body.ingredients,
            steps: req.body.steps,
            portion: req.body.portion,
            cooking_time: req.body.cooking_time,
            UserId: req.loggedInUser.id
        }
        Recipe.create(obj)
            .then((data) => {
                res.status(201).json(data);
            })
            .catch((err) => {
                next(err);
            });
    }

    static read(req, res, next) {
        Recipe.findAll({
            order: [["name", "ASC"]],
            where: {
                UserId: req.loggedInUser.id
            }
        })
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
               next(err);
            });
    }

    static findByPk(req, res, next) {
        const id = Number(req.params.id);
        Recipe.findByPk(id)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                next(err);
            });
    }

    static async put(req, res, next) {
        try {
            const id = Number(req.params.id);
            const obj = {
                name: req.body.name,
                type: req.body.type,
                ingredients: req.body.ingredients,
                steps: req.body.steps,
                portion: req.body.portion,
                cooking_time: req.body.cooking_time,
                UserId: req.loggedInUser.id
            }
            const result = await Recipe.update(obj, {
                where: {
                    id
                },
                returning: true
            });
            res.status(200).json(result[1][0]);
        } catch (err) {
            next(err);
        }
    }

    static async delete(req, res, next) {
        try {
            const id = Number(req.params.id);
            const result = await Recipe.destroy({
                where: {
                    id
                }
            });
            res.status(200).json({ msg: "The recipe has been successfully deleted." });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = RecipeController;