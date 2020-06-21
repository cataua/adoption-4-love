import { Router } from 'express';
import controller from './address.controller';

const addressApi = Router();

addressApi.get('/api/address/', controller.list);
addressApi.get('/api/address/:id', controller.get);
addressApi.post('/api/address/', controller.save);
addressApi.put('/api/address/:id', controller.patch);
addressApi.delete('/api/address/:id', controller.del);

export default {
  relativeUrl: 'address',
  controller: addressApi
};