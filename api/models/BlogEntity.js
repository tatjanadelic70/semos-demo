const { Model } = require("objection");
const Knex = require("knex");

var connectionConfig = require("../db");

const knex = Knex({
  client: "mysql",
  connection: connectionConfig,
});

// Give the knex instance to objection.
Model.knex(knex);

// Person model.
class Blog extends Model {
  static get tableName() {
    return "blogs";
  }
}

async function createSchema() {
  if (await knex.schema.hasTable("blogs")) {
    return;
  }

  await knex.schema.createTable("blogs", (table) => {
    table.increments("id").primary();
    table.string("title");
    table.text("body");
    table.string("tags");
    table.string("status");
    // table.timestamp("created_at").defaultTo(knex.fn.now());
    table.string("author");
  });
}

module.exports = Blog;
