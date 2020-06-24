import { Model } from 'objection';
import Family from '../family/family.model';

export default class Address extends Model {
  
  static tableName = 'tbl_address'

  static get idColumn() {
    return 'address_id';
  }

  static jsonSchema = {
    type: 'object',
    required: ['cep', 'street', 'number'],
    properties: {
      address_id: {type: 'integer' },
      cep: { type: 'string', minLength: 8, maxLength: 8 },
      street: { type: 'string', minLenght: 5, maxLength: 80 },
      number: { type: 'string', minLength: 1, maxLength: 4 },
      complement: { type: 'string', maxLenght: 20 },
      city: { type: 'string', minLength: 5, maxLenght: 90 },
      state: { type: 'string', maxLenght: 2 },
      family_id: { type: 'integer' },
    }
  }

  static relationMappings = () => ({
    family: {
      relation: Model.BelongsToOneRelation,
      modelClass: Family,
      join: {
        from: 'tbl_address.family_id',
        to: 'tbl_family.family_id',
      }
    },
  })
}