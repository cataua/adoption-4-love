import { Router } from 'express';
import controller from './family.controller';

const familyApi = Router();

familyApi.get('/', controller.list);
familyApi.get('/:id', controller.get);
familyApi.post('/', controller.save);
familyApi.put('/:id', controller.save);
familyApi.delete('/:id', controller.del);

export default {
  relativeUrl: 'family',
  controller: familyApi
};