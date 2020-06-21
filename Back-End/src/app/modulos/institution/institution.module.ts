import { Router } from 'express';
import controller from './institution.controller';

const institutionApi = Router();

institutionApi.get('/api/institution/', controller.list);
institutionApi.get('/api/institution/:id', controller.get);
institutionApi.post('/api/institution/', controller.save);
institutionApi.put('/api/institution/:id', controller.patch);
institutionApi.delete('/api/institution/:id', controller.del);

export default {
  relativeUrl: 'institution',
  controller: institutionApi
};