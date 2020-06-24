import App from './app';
import Knex from 'knex';
import { Model } from 'objection';
const config = require('../knexfile');

const config = require('../knexfile');

const knex:Knex = Knex(config.development);

Model.knex(knex);

const app = App();
export default app;