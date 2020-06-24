import Knex from "knex";

const TABLE = "tbl_family_members";

export async function up(db: Knex) {
  await db.schema.hasTable(TABLE).then(async (exist) => {
    if (!exist) {
      await db.schema.createTable(TABLE, (table) => {
        table.increments("family_member_id").primary();
        table.string("name", 120).notNullable();
        table.string("cpf", 11).notNullable();
        table
          .enu("degree_of_kinship", ["Representante", "Cônjuge", "Filho(a)"])
          .notNullable();
        table.string("birth_date", 10).nullable();
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
