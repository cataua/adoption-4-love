import Family from './family.model';

/** 
 * Fetch multiple families
*/
const list = async (context:any) => {
  const query = Family.query();
  
  query.whereNull('deleted_at');

  if (context.query.select) {
    query.select(context.query.select);
  }

  if (context.query.nickname) {
    query.where('nickname', 'LIKE', `%${context.query.nickname}%`);
  }

  if (context.query.email) {
    query.where('email', context.query.email)
  }

  if (context.query.orderBy) {
    query.orderBy(context.query.orderBy);
  }
  const resp = await query;
  
  return resp;
};

const get = async (context:any) => {
  try {
    const familyFound = await Family.query().whereNull('deleted_at').findById(context.params.id);
    return familyFound;
  } catch(error) {
    return error
  }
}

const save = async (context:any) => {
  try {
    const insertedGraph = await Family.transaction(async trx => {
      const insertedGraph = await Family.query(trx)
        .allowGraph('[familyMembers, address]')
        .insertGraph(context.body);
      return insertedGraph; 
    });
    return insertedGraph;
  } catch (error) { 
    return error
  }
}

const patch = async (context:any) => {
  try {
    const insertedGraph = await Family.transaction(async trx => {
      const insertedGraph = await Family.query(trx)
        .patch(context.body)
        .findById(context.params.id);
      return insertedGraph; 
    });
    return { success: insertedGraph ? true : false };
  } catch (error) { 
    return error
  }
}

const del = async (context:any) => {
  try {
    const { id } = context.params;
    const familyReq = context.body;
    const now = new Date();
    familyReq.deleted_at = now;
    const familyDeleted = await Family.query().findById(id).patch(familyReq);
    return {
      success: familyDeleted == 1,
    }
  } catch(error) {
    return error
  }
}

export default {
  list,
  get,
  save,
  patch,
  del,
}