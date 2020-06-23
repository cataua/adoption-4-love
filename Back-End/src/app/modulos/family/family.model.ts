import { Model } from 'objection';
import Address from '../address/address.model';
import FamilyMembers from '../familyMember/familyMember.model';

export default class Family extends Model {
  
  static tableName = 'tbl_family'
  
  static get idColumn() {
    return 'family_id';
  }
  static get related() {
    return this.relationMappings;
  }

  static jsonSchema = {
    type: 'object',
    required: ['nickname', 'email', 'password'],
    properties: {
      family_id: {type: 'integer' },
      avatar: { type: 'string' },
      nickname: { type: 'string', minLenght: 5 },
      email: { type: 'string' },
      password: { type: 'string', minLenght: 6 },
    }
  }

  static relationMappings = () => ({
    familyMembers: {
      relation: Model.HasManyRelation,
      modelClass: FamilyMembers,
      join: {
        from: 'tbl_family_member.family_id',
        to: 'family_id',
      }
    },
    address: {
      relation: Model.HasManyRelation,
      modelClass: Address,
      join: {
        from: 'tbl_address.family_id',
        to: 'family_id',
      }
    }
  })
}