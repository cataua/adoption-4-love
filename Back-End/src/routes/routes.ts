import { Router } from 'express';


const routes = Router();

routes.get('/api', async (req, res) => {
  if (req) {
    res.json('Rota inexistente')
  }
})

routes.get('/api/family', async (req, res) => {
  if (req) {
    res.json([{ message: 'foi' }]);
  }
})

export default routes;