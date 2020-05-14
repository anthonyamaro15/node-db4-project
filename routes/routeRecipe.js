const express = require("express");
const db = require("../modals/recipes-modal");

const route = express.Router();

route.get("/", (req, res) => {
  db.getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "there was an error getting the recipes" });
    });
});

route.get("/:id/shoppinglist", (req, res) => {
  const { id } = req.params;
  db.getShoppingList(id)
    .then((ingredients) => {
      res.status(200).json(ingredients);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "there was an error getting the ingredients" });
    });
});

route.get("/:id/instructions", (req, res) => {
  const { id } = req.params;
  db.getInstructions(id)
    .then((instructions) => {
      res.status(200).json(instructions);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "there was an error getting the instructions" });
    });
});

module.exports = route;
