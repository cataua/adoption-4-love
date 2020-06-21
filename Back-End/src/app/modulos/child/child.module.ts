import { Router } from 'express';
import controller from './child.controller';

const childApi = Router();

childApi.get('/api/child/', controller.list);
childApi.get('/api/child/:id', controller.get);
childApi.post('/api/child/', controller.save);
childApi.put('/api/child/:id', controller.patch);
childApi.delete('/api/child/:id', controller.del);

export default {
  relativeUrl: 'child',
  controller: childApi
};