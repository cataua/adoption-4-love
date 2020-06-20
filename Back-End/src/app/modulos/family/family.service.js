import { bookshelf, ModelBase } from '../../../db';

import familyModel from './family.model';

const related = [
  'members',
  'address'
];

const list = async ({ page= undefined, pageSize= 10, search= undefined}) => {
  const query = familyModel.query((qb) => {
    qb.orderBy('family_id','desc');
    qb.orderBy('nickname', 'desc');
    if (search) {
      qb.where('nickname', search);
      qb.orWhere('email', search);
    }
  });
  if (page) return query.fetchPage({ page, pageSize, withRelated: related });

  return query.fetchAll({ withRelated: related });
};

const get = async (family_id) => {
  return familyModel.where({ family_id: family_id }).fetch({ withRelated: related });
}

const _save = async (family, options) => {
  return familyModel.forge(family).save(null, options);
}

const save = async (family, options = undefined) => {
  return options
    ? _save(family, options)
    : bookshelf.transaction(async (t) => _save(family, { transacting: t}));
}

const del = async (family_id, options) => {
  const family = await get(family_id);
  const familyDeleted = { ...family, deleted_at: Date.now() };
  return save(familyDeleted);
}

export default {
  list,
  get,
  save,
  del,
}