exports.seed = function (knex) {
  // Inserts seed entries
  return knex("ingredients").insert([
    { ingredient_name: "water", quantity: 12 },
    { ingredient_name: "salt", quantity: 2 },
  ]);
};
