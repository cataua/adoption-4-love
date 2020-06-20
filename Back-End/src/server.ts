import App from './app';
import Knex from 'knex';
import config from '../knexfile'
import { Model } from 'objection';

const knex:Knex = Knex(config.development);

Model.knex(knex);

const app = App();
export default app;