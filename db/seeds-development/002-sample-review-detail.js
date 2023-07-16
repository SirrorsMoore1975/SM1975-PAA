const { faker } = require('@faker-js/faker');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

class Review {
  constructor() {
    this.provider_id = faker.datatype.number({ min: 1, max: 9});
    this.reviewer_name = faker.name.fullName();
    this.email = faker.internet.email();
    this.overall = faker.datatype.number(10);
    this.ease_of_use = faker.datatype.number(10);
    this.coverage = faker.datatype.number(10);
    this.price = faker.datatype.number(10);
    this.customer_service = faker.datatype.number(10);
    this.customer_review = faker.lorem.paragraphs(1);
  }
}

function dataGenerator(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(new Review());
  }
  return result;
}
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('review_detail').del()
  await knex('review_detail').insert(dataGenerator(200));
};
