import { Router } from 'express';
// import { routeType } from './types/routes.types';
import family from './app/modulos/family/family.module';
import member from './app/modulos/familyMember/familyMember.module';
import address from './app/modulos/address/address.module';
import institution from './app/modulos/institution/institution.module';
import child from './app/modulos/child/child.module';


const routes = Router();

routes.use(family.controller);
routes.use(member.controller);
routes.use(address.controller);
routes.use(institution.controller);
routes.use(child.controller);


export default routes;