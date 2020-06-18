import Knex from 'knex';
import Bookshelf from 'bookshelf';
import _ from 'lodash';
import moment from 'moment';
import config from '../knexfile';

console.log('configf -> ', config['development']);
const knex = Knex(config['development']);
const bookshelf = Bookshelf(knex);

bookshelf.plugin('visibility');
bookshelf.plugin('registry');
bookshelf.plugin('pagination');
bookshelf.plugin('processor');
bookshelf.plugin('virtuals');

const ModelBase = bookshelf.Model.extend({
  hasTimestamps: ['created_at', 'updated_at', 'deleted_at'],
  timestamp(options) {
    if (!this.hasTimestamps) {
      return {};
    }
    const agora = (options || {}).date
      ? moment(options.date).format('YYYY-MM-DD HH:mm:ss')
      : moment().format('YYYY-MM-DD HH:mm:ss');
    const atributos = {};
    const metodo = this.saveMethod(options);
    const chavesTimestamp = this.getTimestampKeys();
    const chaveCriadoEm = chavesTimestamp[0];
    const chaveAtualizadoEm = chavesTimestamp[1];
    const isNovoModel = metodo === 'insert';

    if (chaveAtualizadoEm && (isNovoModel || this.hasChanged())
    && !this.hasChanged(chaveAtualizadoEm)) {
      atributos[chaveAtualizadoEm] = agora;
    }

    if (chaveCriadoEm && isNovoModel && !this.hasChanged(chaveCriadoEm)) {
      atributos[chaveCriadoEm] = agora;
    }
    this.set(atributos, _.extend(options, { silent: true }));
    return atributos;
  },
});

export { knex, bookshelf, ModelBase };
export default knex;
