import { Router } from 'express';
// import { routeType } from './types/routes.types';
import familyModule from './app/modulos/family/family.module';


const routes = Router();

routes.use(familyModule.controller);


export default routes;