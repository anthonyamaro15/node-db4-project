exports.seed = function (knex) {
  // Inserts seed entries
  return knex("recipes").insert([
    { recipe_name: "ginger beef stir", step_id: 1 },
    { recipe_name: "cinnamon rolls", step_id: 2 },
    { recipe_name: "chicken tacos", step_id: 3 },
    { recipe_name: "simple tomato soup", step_id: 1 },
  ]);
};
