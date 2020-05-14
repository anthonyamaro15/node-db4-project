exports.seed = function (knex) {
  // Inserts seed entries
  return knex("ingredient_instruction_recipe").insert([
    { instruction_id: 1, ingredient_id: 2, recipe_id: 1 },
    { instruction_id: 2, ingredient_id: 1, recipe_id: 1 },
    { instruction_id: 1, ingredient_id: 2, recipe_id: 3 },
    { instruction_id: 1, ingredient_id: 2, recipe_id: 4 },
  ]);
};
