import Knex from "knex";

const TABLE = "tbl_adoption_child";

export async function up(db: Knex) {
  await db.schema.hasTable(TABLE).then(async (exist) => {
    if (!exist) {
      await db.schema.createTable(TABLE, (table) => {
        table.increments("child_id").primary();
        table.string("nickname", 45).notNullable();
        table.dateTime("birth_date").notNullable();
        table
          .enu("ethinicity", [
            "Branco",
            "Pardo",
            "Negro",
            "Indígena",
            "Amarelo",
          ])
          .notNullable();
        table
          .integer("institution_id")
          .references("institution_id")
          .inTable("tbl_institution")
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
