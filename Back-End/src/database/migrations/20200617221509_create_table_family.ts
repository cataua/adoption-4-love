import Knex from "knex";

const TABLE = "tbl_family";

export async function up(db: Knex) {
  await db.schema.hasTable(TABLE).then(async (exist) => {
    if (!exist) {
      await db.schema.createTable(TABLE, (table) => {
        table.increments("family_id").primary();
        table.string("avatar", 45).nullable();
        table.string("nickname", 45).notNullable().unique();
        table.string("email", 45).notNullable();
        table.string("password").notNullable();
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
