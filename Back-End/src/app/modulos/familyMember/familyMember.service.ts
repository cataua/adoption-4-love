import model from "./familyMember.model";
import Family from "../family/family.model";
import { UniqueViolationError } from "objection";

/**
 * Fetch multiple members
 */
const list = async (args: any) => {
  const query = model.query();

  query.whereNull("deleted_at");

  if (args.query.select) {
    query.select(args.query.select);
  }

  if (args.query.name) {
    query.where("name", "LIKE", `%${args.query.name}%`);
  }

  if (args.query.cpf) {
    query.where("cpf", args.query.cpf);
  }

  if (args.query.birthday) {
    query.where("birth_date", args.query.birthday);
  }

  if (args.query.orderBy) {
    query.orderBy(args.query.orderBy);
  }
  const resp = await query;

  return resp;
};

/**
 * Get one family member
 * @param args
 */
const get = async (args: any) => {
  try {
    const member = await model
      .query()
      .allowGraph("[family.[address]]")
      .withGraphFetched("[family.[address]]")
      .whereNull("deleted_at")
      .findById(args.params.id);
    return member;
  } catch (error) {
    return error;
  }
};
/**
 * Save family member
 * @param args
 */
const save = async (args: any) => {
  const trx = await model.startTransaction();
  try {
    const { family_id, name, cpf, birth_date, degree_of_kinship } = args.body;
    const familyMemberBody = {
      name,
      cpf,
      birth_date,
      degree_of_kinship,
    } as any;
    const familyMember = await Family.relatedQuery("familyMembers", trx)
      .for(family_id)
      .insert(familyMemberBody);
    await trx.commit();
    return familyMember;
  } catch (error) {
    await trx.rollback();
    if(error instanceof UniqueViolationError) {
      return ["Já existe um membro com os dados informados"];
    }
    if (error?.type === "ModelValidation") {
      let errors = Object.entries(error.data);
      return errors.map((err: Object) => {
        if (err[1][0].keyword === "required") {
          return `O campo ${err[0]} é obrigatório!`;
        } else if (err[1][0].keyword === "minLength") {
          return `O campo ${err[0]} deve ter no mínimo ${err[1][0].params.limit} caracteres!`;
        } else if (err[1][0].keyword === "maxLength") {
          return `O campo ${err[0]} deve ter no máximo ${err[1][0].params.limit} caracteres!`;
        } else if (err[1][0].keyword === "enum") {
          return `O campo ${
            err[0]
          } só pode conter os valores: ${err[1][0].params.allowedValues
            .slice(1, 3)
            .join(" e ")}`;
        } else {
          console.log(err[1][0]);
          return "Não foi possível validar as informações";
        }
      });
    }
    return ["Não foi possível validar as informações"];
  }
};

/**
 * Update family member
 * @param args
 */
const patch = async (args: any) => {
  try {
    const insertedGraph = await model.transaction(async (trx) => {
      const insertedGraph = await model
        .query(trx)
        .patch(args.body)
        .findById(args.params.id);
      return insertedGraph;
    });
    return { success: insertedGraph ? true : false };
  } catch (error) {
    return error;
  }
};

/**
 * Delete/Desactive a family member
 * @param args
 */
const del = async (args: any) => {
  try {
    const { id } = args.params;
    const memberReq = args.body;
    const now = new Date();
    memberReq.deleted_at = now;
    const memberDeleted = await model.query().findById(id).patch(memberReq);
    return {
      success: memberDeleted == 1,
    };
  } catch (error) {
    return error;
  }
};

/**
 * Export methods
 */
export default {
  list,
  get,
  save,
  patch,
  del,
};
