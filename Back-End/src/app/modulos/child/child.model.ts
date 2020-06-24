import { Model } from 'objection';
import Institution from '../institution/institution.model';

export default class Child extends Model {
  
  static tableName = 'tbl_adoption_child'

  static get idColumn() {
    return 'child_id';
  }

  static jsonSchema = {
    type: 'object',
    required: ['nickname', 'birth_date', 'ethinicity', 'institution_id'],
    properties: {
      child_id: {type: 'integer' },
      nickname: { type: 'string', minLength: 8, maxLength: 45 },
      birth_date: { type: 'string' },
      ethinicity: { type: 'string', enum: ['Branco', 'Pardo', 'Negro', 'Indígena', 'Amarelo'] },
      insitution_id: { type: 'integer' },
    }
  }

  static relationMappings = () => ({
    institution: {
      relation: Model.BelongsToOneRelation,
      modelClass: Institution,
      join: {
        from: 'tbl_adoption_child.institution_id',
        to: 'tbl_institution.institution_id',
      }
    },
  })
}