/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.alterTable('review_detail', (table) => {
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
  return await knex.schema.alterTable('review_detail', (table) => {
    table.dropColumns('overall', 'ease_of_use', 'coverage', 'price', 'customer_service', 'customer_review');
  })
};
