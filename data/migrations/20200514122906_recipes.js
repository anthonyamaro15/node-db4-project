exports.up = function (knex) {
  return knex.schema
    .createTable("ingredients", (table) => {
      table.increments();
      table.string("ingredient_name", 255).notNullable();
      table.float("quantity").notNullable();
    })
    .createTable("instructions", (table) => {
      table.increments();
      table.string("instruction_name", 255).notNullable();
    })
    .createTable("steps", (table) => {
      table.increments();
      table.string("step_name", 255).notNullable();
    })
    .createTable("recipes", (table) => {
      table.increments();
      table.string("recipe_name", 255).notNullable();
      table
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("steps.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("ingredient_instruction_recipe", (table) => {
      table.increments();
      table
        .integer("instruction_id")
        .unsigned()
        .notNullable()
        .references("instructions.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredients.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("ingredient_instruction_recipe")
    .dropTableIfExists("recipes")
    .dropTableIfExists("steps")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients");
};
