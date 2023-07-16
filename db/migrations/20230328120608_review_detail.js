/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.createTable("review_detail", (table) => {
    table.increments("id");
    table.integer("provider_id")
      .references('id')
      .inTable('provider');
    table.string('reviewer_name', 255);
    table.string('email', 255);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTable("review_detail")
};
