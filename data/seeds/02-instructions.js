exports.seed = function (knex) {
  // Inserts seed entries
  return knex("instructions").insert([
    { instruction_name: "add water" },
    { instruction_name: "add salt" },
    { instruction_name: "mix them together" },
  ]);
};
