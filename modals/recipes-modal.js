const db = require("../data/config-db");

function getRecipes() {
  return db("recipes as r").select("r.id", "r.recipe_name");
}

function getShoppingList(recipe_id) {
  return db("ingredient_instruction_recipe as co")
    .join("ingredients as i", "co.ingredient_id", "i.id")
    .where("co.recipe_id", recipe_id)
    .select("i.id", "i.ingredient_name", "i.quantity", "co.recipe_id");
}

function getInstructions(recipe_id) {
  return db("ingredient_instruction_recipe as co")
    .join("instructions as i", "co.instruction_id", "i.id")
    .where("co.recipe_id", recipe_id)
    .select("i.id", "i.instruction_name", "co.recipe_id");
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};
