import model from './familyMember.model';

/** 
 * Fetch multiple members
*/
const list = async (args:any) => {
  const query = model.query();
  
  query.whereNull('deleted_at');

  if (args.query.select) {
    query.select(args.query.select);
  }

  if (args.query.name) {
    query.where('name', 'LIKE', `%${args.query.name}%`);
  }

  if (args.query.cpf) {
    query.where('cpf', args.query.cpf)
  }

  if (args.query.birthday) {
    query.where('birth_date', args.query.birthday)
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
const get = async (args:any) => {
  try {
    const member = await model
      .query()
      .allowGraph('[family.[address]]')
      .withGraphFetched('[family.[address]]')
      .whereNull('deleted_at')
      .findById(args.params.id);
    return member;
  } catch(error) {
    return error
  }
}
/** 
 * Save family member
 * @param args
*/
const save = async (args:any) => {
  try {
    const insertedGraph = await model.transaction(async trx => {
      const insertedGraph = await model.query(trx)
        .allowGraph('[family]')
        .insertGraph(args.body);
      return insertedGraph; 
    });
    console.log('Inserted -> ', insertedGraph);
    return insertedGraph;
  } catch (error) { 
    console.log('Erro -> ', error)
    return error
  }
}

/** 
 * Update family member
 * @param args
*/
const patch = async (args:any) => {
  try {
    const insertedGraph = await model.transaction(async trx => {
      const insertedGraph = await model.query(trx)
        .patch(args.body)
        .findById(args.params.id);
      return insertedGraph; 
    });
    return { success: insertedGraph ? true : false };
  } catch (error) { 
    return error
  }
}

/** 
 * Delete/Desactive a family member
 * @param args
*/
const del = async (args:any) => {
  try {
    const { id } = args.params;
    const memberReq = args.body;
    const now = new Date();
    memberReq.deleted_at = now;
    const memberDeleted = await model.query().findById(id).patch(memberReq);
    return {
      success: memberDeleted == 1,
    }
  } catch(error) {
    return error
  }
}

/** 
 * Export methods
*/
export default {
  list,
  get,
  save,
  patch,
  del,
}