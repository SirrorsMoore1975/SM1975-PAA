/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.createTable("review_score", (table) => {
    table.integer('detail_id')
      .references("id")
      .inTable("review_detail");
    table.integer('overall');
    table.integer('ease_of_use');
    table.integer('coverage');
    table.integer('price');
    table.integer('customer_service');
    table.text("customer_review", 'longtext');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTable("review_score");
};
