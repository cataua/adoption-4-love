import service from './institution.model'

/** 
 * Fetch multiple institutions
*/
const list = async (args:any) => {
  const query = service.query();
  
  query.whereNull('deleted_at');

  if (args.query.select) {
    query.select(args.query.select);
  }

  if (args.query.name) {
    query.where('name', 'LIKE', `%${args.query.name}%`);
  }

  if (args.query.cnpj) {
    query.where('cnpj', args.query.cnpj)
  }

  if (args.query.foundation) {
    query.where('foundation_date', args.query.foundation)
  }

  if (args.query.orderBy) {
    query.orderBy(args.query.orderBy);
  }
  const resp = await query;
  
  return resp;
};

/** 
 * Get one institution
 * @param args
*/
const get = async (args:any) => {
  try {
    const member = await service.query().whereNull('deleted_at').findById(args.params.id);
    return member;
  } catch(error) {
    return error
  }
}
/** 
 * Save institution
 * @param args
*/
const save = async (args:any) => {
  try {
    const insertedGraph = await service.transaction(async (trx) => {
      const insertedGraph = await service.query(trx)
        .allowGraph('[child]')
        .insertGraph(args.body);
      return insertedGraph; 
    });
    return insertedGraph;
  } catch (error) { 
    return error
  }
}

/** 
 * Update institution
 * @param args
*/
const patch = async (args:any) => {
  try {
    const insertedGraph = await service.transaction(async (trx) => {
      const insertedGraph = await service.query(trx)
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
 * Delete/Desactive a institution
 * @param args
*/
const del = async (args:any) => {
  try {
    const { id } = args.params;
    const memberReq = args.body;
    const now = new Date();
    memberReq.deleted_at = now;
    const memberDeleted = await service.query().findById(id).patch(memberReq);
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