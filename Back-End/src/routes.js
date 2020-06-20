import { Router } from 'express';

import family from './app/modulos/family/family.module';


const api = Router();

api.get('/api', async (req, res) => {
  if (req) {
    res.json('Rota inexistente')
  }
})

api.use('/api/family', family.controller);

export default api;