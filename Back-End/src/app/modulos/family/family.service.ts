import Family from "./family.model";
/**
 * Fetch multiple families
 */
const list = async (args: any) => {
  const query = Family.query().allowGraph("[familyMembers.*, address.*]"); //.withGraphJoined('[familyMembers.*, address.*]');
  console.log("uwr ", query);
  query.whereNull("deleted_at");

  if (args.query.nickname) {
    query.where("nickname", "LIKE", `%${args.query.nickname}%`);
  }

  if (args.query.email) {
    query.where("email", args.query.email);
  }

  if (args.query.orderBy) {
    query.orderBy(args.query.orderBy);
  }

  // query.withGraphFetched();
  const resp = await query;

  return resp;
};

/**
 * Get on family
 * @param args
 */
const get = async (args: any) => {
  try {
    const familyFound: Object = await Family.query()
      .allowGraph("[familyMembers, address]")
      .withGraphFetched("[familyMembers, address]")
      .whereNull("deleted_at")
      .where("family_id", "=", args.params.id);
    return familyFound;
  } catch (error) {
    console.log("Error -> ", error);
    return error;
  }
};
/**
 * Save family
 * @param args
 */
const save = async (args: any) => {
  const trx = await Family.startTransaction();
  try {
    const { avatar, email, password, name, cpf, birth_date } = args.body;
    const familyBody = {
      avatar,
      nickname: name.split(" ").pop().toLowerCase() + new Date().getTime(),
      email,
      password,
    } as any;
    const familyMembers = {
      name,
      cpf,
      birth_date,
      degree_of_kinship: "Representante",
    } as any;
    /**
     * Versão sem transaction
     */
    // const familyBody = {
    //   avatar,
    //   nickname: name.split(" ").pop().toLowerCase() + new Date().getTime(),
    //   email,
    //   password,
    //   familyMembers: [
    //      name,
    //      cpf,
    //      birth_date,
    //      degree_of_kinship: "Representante",
    //   ]
    // } as any;
    // const insertedGraph = await Family.query()
    //   .allowGraph("[familyMembers]")
    //   .insertGraph(familyBody);
    const family = await Family.query(trx).insert(familyBody);
    await family.$relatedQuery("familyMembers", trx).insert(familyMembers);
    await trx.commit();
    return family.$fetchGraph("[familyMembers]");
  } catch (error) {
    await trx.rollback();
    return error;
  }
};

/**
 * Update family
 * @param args
 */
const patch = async (args: any) => {
  try {
    const insertedGraph = await Family.transaction(async (trx) => {
      const insertedGraph = await Family.query(trx)
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
 * Delete/Desactive a family
 * @param args
 */
const del = async (args: any) => {
  try {
    const { id } = args.params;
    const familyReq = args.body;
    const now = new Date();
    familyReq.deleted_at = now;
    const familyDeleted = await Family.query().findById(id).patch(familyReq);
    return {
      success: familyDeleted == 1,
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
