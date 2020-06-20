
const TABLE = 'tbl_adoption_child';

exports.up = async (db) => {
  await db.schema.hasTable(TABLE).then(async (exist) => {
    if (!exist) {
        await db.schema.createTable(TABLE, (table) => {
            table.increments('child_id').primary();
            table.string('nickname', 45).notNullable();
            table.datetime('birth_date').notNullable();
            table.enu('ethinicity', ['Branco', 'Pardo', 'Negro', 'Indígena', 'Amarelo']).notNullable();
            table.integer('institution_id')
              .references('institution_id')
              .inTable('tbl_institution')
              .unsigned();
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