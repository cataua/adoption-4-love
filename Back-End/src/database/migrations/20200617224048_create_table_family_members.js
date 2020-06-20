
const TABLE = 'tbl_family_members';

exports.up = async (db) => {
  await db.schema.hasTable(TABLE).then(async (exist) => {
    if (!exist) {
        await db.schema.createTable(TABLE, (table) => {
            table.increments('family_member_id').primary();
            table.string('name', 120).notNullable();
            table.string('cpf', 11).notNullable();
            table.enu('degree_of_kinship', ['Representante', 'Cônjuge', 'Filho(a)']).notNullable();
            table.date('birth_date').nullable();
            table
              .integer('family_id')
              .references('family_id')
              .inTable('tbl_family')
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