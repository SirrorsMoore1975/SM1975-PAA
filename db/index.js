const knex = require('knex');
const knexConfigs = require("../knexfile");

module.exports = knex(knexConfigs[process.env.NODE_ENV]);