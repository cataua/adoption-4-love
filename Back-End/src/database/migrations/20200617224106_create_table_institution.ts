import Knex from "knex";

const TABLE = "tbl_institution";

export async function up(db: Knex) {
  await db.schema.hasTable(TABLE).then(async (exist) => {
    if (!exist) {
      await db.schema.createTable(TABLE, (table) => {
        table.increments("institution_id").primary();
        table.string("avatar", 255).nullable();
        table.string("name", 120).notNullable();
        table.string("cnpj", 14).notNullable();
        table.dateTime("foundation_date").nullable();
        table.string("password", 65).notNullable();
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
