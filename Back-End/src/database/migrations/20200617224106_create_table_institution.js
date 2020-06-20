
const TABLE = 'tbl_institution';

exports.up = async (db) => {
  await db.schema.hasTable(TABLE).then(async (exist) => {
    if (!exist) {
        await db.schema.createTable(TABLE, (table) => {
            table.increments('institution_id').primary();
            table.string('avatar', 255).nullable();
            table.string('name', 120).notNullable();
            table.string('cnpj', 14).notNullable();
            table.datetime('foundation_date').nullable();
            table.string('password', 65).notNullable();
            table.timestamp('created_at').notNullable().defaultTo(db.fn.now());
            table.timestamp('updated_at').notNullable().defaultTo(db.fn.now());
            table.timestamp('deleted_at').nullable(); 
        })
    }
  });
};

exports.down = async (db) => {
  await db.schema.hasTable(TABLE).then(async (exist) => {
    if (exist) {
      await db.schema.dropTable(TABLE);
    }
  })
};

exports.configuration = { transaction: true }