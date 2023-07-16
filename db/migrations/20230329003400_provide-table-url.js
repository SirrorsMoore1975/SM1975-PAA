/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.alterTable('provider', (table) => {
    table.text('site_url', 'mediumtext');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.alterTable('provider', (table) => {
    table.dropColumn('site_url');
  })
};
