import model from './child.model';

/** 
 * Fetch multiple childrens
*/
const list = async (args:any) => {
  const query = model.query();
  
  query.whereNull('deleted_at');

  if (args.query.select) {
    query.select(args.query.select);
  }

  if (args.query.nickname) {
    query.where('nickname', 'LIKE', `%${args.query.nickname}%`);
  }

  if (args.query.ethinicity) {
    query.where('ethinicity', args.query.ethinicity)
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
 * Get one child
 * @param args
*/
const get = async (args:any) => {
  try {
    const child = await model
      .query()
      .allowGraph('[institution]')
      .withGraphFetched('[institution]')
      .whereNull('deleted_at')
      .findById(args.params.id);
    return child;
  } catch(error) {
    return error
  }
}
/** 
 * Save child
 * @param args
*/
const save = async (args:any) => {
  try {
    const insertedGraph = await model.transaction(async (trx) => {
      const insertedGraph = await model.query(trx)
        .allowGraph('[institution]')
        .insertGraph(args.body);
      return insertedGraph; 
    });
    return insertedGraph;
  } catch (error) { 
    return error
  }
}

/** 
 * Update child
 * @param args
*/
const patch = async (args:any) => {
  try {
    const insertedGraph = await model.transaction(async (trx) => {
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
 * Delete/Desactive a child
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