import { bookshelf, ModelBase } from '../../../db';

const Family = ModelBase.extend({
  tableName: 'tbl_family',
  idAttribute: 'family_id',
  hasTimestamps: ['created_at', 'updated_at', 'deleted_at'],
  members() {
    return this.hasMany('tbl_family_member', 'family_id', 'family_id');
  },
  adddress() {
    return this.hasMany('tbl_address', 'family_id', 'family_id');
  }
});

export default booksheld.model('Family', Family);