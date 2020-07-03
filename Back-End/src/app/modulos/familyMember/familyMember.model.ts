import { Model } from "objection";
import Family from "../family/family.model";

export default class FamilyMembers extends Model {
  static tableName = "tbl_family_members";

  static get idColumn() {
    return "family_member_id";
  }

  static jsonSchema = {
    type: "object",
    required: ["name", "cpf", "degree_of_kinship"],
    properties: {
      family_member_id: { type: "integer" },
      name: { type: "string", minLength: 10, maxLength: 120 },
      cpf: { type: "string", minLength: 11, maxLength: 11 },
      degree_of_kinship: {
        type: "string",
        enum: ["Representante", "Cônjuge", "Filho(a)"],
      },
      birth_date: { type: "string", minLength: 10 },
    },
  };

  static relationMappings = () => ({
    family: {
      relation: Model.HasOneRelation,
      modelClass: Family,
      join: {
        from: "tbl_family_members.family_id",
        to: "tbl_family.family_id",
      },
    },
  });
}
