/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.createTable("provider", (table) => {
    table.increments("id");
    table.string("name");
    table.text("img_url", 'mediumtext');
    table.text("description", 'longtext');
    table.boolean("english_support");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTable("provider")
};
