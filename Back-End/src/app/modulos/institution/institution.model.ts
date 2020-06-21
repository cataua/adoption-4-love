import { Model } from 'objection';
import Child from '../child/child.model';

export default class Institution extends Model {
  
  static tableName = 'tbl_institution'

  static get idColumn() {
    return 'institution_id';
  }

  static jsonSchema = {
    type: 'object',
    required: ['name', 'cnpj', 'password'],
    properties: {
      institution_id: {type: 'integer' },
      avatar: { type: 'string', minLength: 12, maxLength: 255 },
      name: { type: 'string', minLenght: 5, maxLength: 120 },
      cnpj: { type: 'string', minLength: 14, maxLength: 14 },
      foundation_date: { type: 'string' },
      password: { type: 'string', minLength: 6, maxLenght: 65 },
    }
  }

  static relationMappings = () => ({
    institution: {
      relation: Model.HasManyRelation,
      modelClass: Child,
      join: {
        from: 'tbl_adoption_child.institution_id',
        to: 'institution_id',
      }
    },
  })
}