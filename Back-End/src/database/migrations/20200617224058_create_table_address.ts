import Knex from "knex";

const TABLE = "tbl_address";

export async function up(db: Knex) {
  await db.schema.hasTable(TABLE).then(async (exist) => {
    if (!exist) {
      await db.schema.createTable(TABLE, (table) => {
        table.increments("address_id").primary();
        table.string("cep", 8).notNullable();
        table.string("street", 80).notNullable();
        table.string("number", 4).notNullable();
        table.string("complement", 20).nullable();
        table.string("city", 90).nullable();
        table.string("state", 2).nullable();
        table
          .integer("family_id")
          .references("family_id")
          .inTable("tbl_family")
          .unsigned();
        table.timestamp("created_at").notNullable().defaultTo(db.fn.now());
        table.timestamp("updated_at").notNullable().defaultTo(db.fn.now());
        table.timestamp("deleted_at").nullable();
      });
    }
  });
}

export async function down(db: Knex) {
  await db.schema.hasTable(TABLE).then(async (exist) => {
    if (exist) {
      await db.schema.dropTable(TABLE);
    }
  });
}
