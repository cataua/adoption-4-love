import model from "./address.model";
import Family from "../family/family.model";
/**
 * Fetch all address
 * @param args
 */
const list = async (args: any) => {
  const query = model.query();

  query.whereNull("deleted_at");

  if (args.query.cep) {
    query.where("cep", args.query.cep);
  }

  if (args.query.street) {
    query.where("street", "LIKE", `%${args.query.street}%`);
  }

  if (args.query.city) {
    query.where("city", "LIKE", `%${args.query.city}%`);
  }

  const resp = await query;

  return resp;
};

/**
 * Get one address
 * @param args
 */
const get = async (args: any) => {
  try {
    const addressFound = await model
      .query()
      .allowGraph("[family.[familyMembers]]")
      .withGraphFetched("[family.[familyMembers]]")
      .whereNull("deleted_at")
      .findById(args.params.id);

    return addressFound;
  } catch (error) {
    return error;
  }
};
/**
 * Save address
 * @param args
 */
const save = async (args: any) => {
  const trx = await Family.startTransaction();
  try {
    const {
      cep,
      street,
      number,
      complement,
      city,
      state,
      family_id,
    } = args.body;
    const addressFamily = {
      cep,
      street,
      number,
      complement,
      city,
      state,
      family_id
    } as any;
    const address = await Family.relatedQuery("address", trx)
      .for(family_id)
      .insert(addressFamily);
    await trx.commit();
    return address;
  } catch (error) {
    console.log(error);
    await trx.rollback();
    if (error?.type === "ModelValidation") {
      let errors = Object.entries(error.data);
      return errors.map((err: Object) => {
        if (err[1][0].keyword === "required") {
          return `O campo ${err[0]} é obrigatório!`;
        } else if (err[1][0].keyword === "minLength") {
          return `O campo ${err[0]} deve ter no mínimo ${err[1][0].params.limit} caracteres!`;
        } else if (err[1][0].keyword === "maxLength") {
          return `O campo ${err[0]} deve ter no máximo ${err[1][0].params.limit} caracteres!`;
        } else {
          return "Não foi possível validar as informações";
        }
      });
    }
    return ["Não foi possível validar as informações"];
  }
};

/**
 * Update address
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
 * Delete/Desactive a address
 * @param args
 */
const del = async (args: any) => {
  try {
    const { id } = args.params;
    const addressReq = args.body;
    const now = new Date();
    addressReq.deleted_at = now;
    const addressDeleted = await model.query().findById(id).patch(addressReq);
    return {
      success: addressDeleted == 1,
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
