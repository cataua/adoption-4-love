import { Router } from 'express';
import controller from './familyMember.controller';

const memberApi = Router();

memberApi.get('/api/member/', controller.list);
memberApi.get('/api/member/:id', controller.get);
memberApi.post('/api/member/', controller.save);
memberApi.put('/api/member/:id', controller.patch);
memberApi.delete('/api/member/:id', controller.del);

export default {
  relativeUrl: 'member',
  controller: memberApi
};