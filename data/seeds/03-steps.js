exports.seed = function (knex) {
  // Inserts seed entries
  return knex("steps").insert([
    { step_name: "mix water and salt carfully" },
    { step_name: "boil at min temperature" },
    { step_name: "let it rest for about an hour" },
  ]);
};
