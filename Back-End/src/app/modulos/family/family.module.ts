import { Router } from 'express';
import controller from './family.controller';

const familyApi = Router();

familyApi.get('/api/family/', controller.list);
familyApi.get('/api/family/:id', controller.get);
familyApi.post('/api/family/', controller.save);
familyApi.put('/api/family/:id', controller.patch);
familyApi.delete('/api/family/:id', controller.del);

export default {
  relativeUrl: 'family',
  controller: familyApi
};